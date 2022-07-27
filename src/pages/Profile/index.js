import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

import { Container, Content, ProfileForm, User, LabelImage, InfoUser, UpLoadIcon } from './styles';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

import Navbar from '../../components/Navbar';
import Wrapper from '../../components/Wrapper';
import InputWrapper from '../../components/WrapperInput';
import Button from '../../components/Button';
import avatar from '../../assets/avatar.png';

function Profile() {
   const { user, setUser, storageUser } = useContext(AuthContext);

   const [name, setName] = useState(user && user.name);
   const [email, setEmail] = useState(user && user.email);

   const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
   const [imageAvatar, setImageAvatar] = useState(null)

   const [nameErr, setNameErr] = useState(false);

   const err = {
      from: {y: -10, opacity: 0, delay: 0},
      to: {y: 0, opacity: 1, transition: { duration: 0}}
   }


   function handleFile(e) {
      if (e.target.files[0]) {
         const image = e.target.files[0];

         if (image.type === 'image/jpeg' || image.type === 'image/png') {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]));
         }
         else {
            alert('Envie uma imagem do tipo PNG ou JPEG');
            setImageAvatar(null);
            return null;
         }
      }
   }

   async function handleUpload() {
      const currentUid = user.uid;

      const uploadTask = await firebase.storage()
      .ref(`images/${currentUid}/${imageAvatar.name}`)
      .put(imageAvatar)
      .then( async () => {
         console.log('Foto enviada com sucesso!');

         await firebase.storage().ref(`images/${currentUid}`)
         .child(imageAvatar.name).getDownloadURL()
         .then( async (url) => {
            let urlFoto = url;

            await firebase.firestore().collection('users')
            .doc(user.uid)
            .update({
               avatarUrl: urlFoto,
               name: name
            })
            .then( () => {
               let data = {
                  ...user,
                  avatarUrl: urlFoto,
                  name: name
               };

               setUser(data);
               storageUser(data);

               toast('Alterações salvas.', {
                  position: "bottom-right",
                  autoClose: 1500,
                  hideProgressBar: true,
                  pauseOnHover: true,
                  className: 'toast-success',
               });
            })
         })
      })
   }

   async function handleSave(e) {
      e.preventDefault();
      
      if (name === '') {
         setNameErr(true);
      }
      else if (imageAvatar === null && name !== '') {
         await firebase.firestore().collection('users')
         .doc(user.uid)
         .update({
            name: name,
         })
         .then(() => {
            let data = {
               ...user,
               name: name
            };

            setUser(data);
            storageUser(data);
            setNameErr(false);

            toast('Alterações salvas.', {
               position: "bottom-right",
               autoClose: 1500,
               hideProgressBar: true,
               pauseOnHover: true,
               className: 'toast-success',
            });
         })
         .catch()
      }
      else if (name !== '' && imageAvatar !== null) {
         handleUpload();
      }
   }

   return (
      <Container>
         <Navbar />

         <Wrapper>
            <Content>
               <ProfileForm onSubmit={handleSave}>
                  <User>
                     <LabelImage htmlFor='image'>
                        <UpLoadIcon />

                        <input
                           type='file'
                           onChange={handleFile}
                           accept='image/*'
                           id='image'
                        />
                        {avatarUrl === null
                           ? <img src={avatar} alt='Foto de perfil de usuario Hike' />
                           : <img src={avatarUrl} alt='Foto de perfil de usuario Hike' />
                        }
                     </LabelImage>

                     <InfoUser>
                        <p>{user.name}</p>
                        <span>{user.email}</span>
                     </InfoUser>
                  </User>   

                  <InputWrapper>
                     <input
                        type='text'
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete='off'
                        placeholder='Nome'
                        id='name'
                        className={nameErr ? 'classErr' : null}
                     />
                     <label htmlFor='name'>Nome</label>

                     {nameErr &&
                        <motion.span
                           variants={err}
                           initial='from'
                           animate='to'
                        >
                           Nome obrigatório
                        </motion.span>
                     }
                  </InputWrapper>
                  <br />
                  <InputWrapper>
                     <input
                        type='text'
                        defaultValue={email}
                        id='email'
                        disabled
                     />
                     <label htmlFor='email'>Email</label>
                  </InputWrapper>
                  <Button type='submit' span='Salvar'/>
               </ProfileForm>
            </Content>
         </Wrapper>
      </Container>
   );
}

export default Profile;