import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

import { Container, Wrapper, Content, Form, User, LabelImage, LabelInput, SpanErr, InfoUser, UpLoadIcon } from './styles';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import avatar from '../../assets/avatar.png';

function Profile() {
   const { user, setUser, storageUser } = useContext(AuthContext);

   const [name, setName] = useState(user && user.name);
   const [email, setEmail] = useState(user && user.email);

   const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
   const [imageAvatar, setImageAvatar] = useState(null)

   const [nullName, setNullname] = useState(false);


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
            })
         })
      })
   }

   async function handleSave(e) {
      e.preventDefault();
      
      if (name === '') {
         setNullname(true);
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
            setNullname(false);
         })
         .catch()
      }
      else if (name !== '' && imageAvatar !== null) {
         handleUpload();
      }
   }

   return (
      <Container className='oi'>
         <Navbar />

         <Wrapper>
            <Content>
               <Form onSubmit={handleSave}>
                  <User>
                     <LabelImage>
                        <span>
                           <UpLoadIcon />
                        </span>

                        <input type='file' accept='image/*' onChange={handleFile} />
                        { avatarUrl === null
                           ? <img src={avatar} alt='Foto de perfil de usuario Hike' />
                           : <img src={avatarUrl} alt='Foto de perfil de usuario Hike' />
                        }
                     </LabelImage>

                     <InfoUser>
                        <p>{user.name}</p>
                        <span>{user.email}</span>
                     </InfoUser>
                  </User>   

                  <LabelInput>
                     <p>Nome</p>
                     <input type='text' defaultValue={name} onChange={ (e) => setName(e.target.value) } />
                     { nullName && <SpanErr>Você precisa de um nome para alterar.</SpanErr>}
                  </LabelInput>

                  <LabelInput>
                     <p>Email</p>
                     <input type='text' defaultValue={email} disabled />
                  </LabelInput>
                  
                  <Button type='submit' span='Salvar'/>
               </Form>
            </Content>
         </Wrapper>     
      </Container>
   );
}

export default Profile;