import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/auth';
import firebase from '../../../services/firebaseConnection';
import { format } from 'date-fns';

import { Container, Content, Header, Section, TitleEdit, Title, Desc, Created, TitleEmpty, DescEmpty, PlaceList, Place, TitleEditPlace, TitlePlace, Obs, RoadmapForm, EditIcon, Edit2Icon, CloseIcon, TrashIcon, PlusIcon, Button2 } from './styles';

import Navbar from '../../../components/Navbar';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';


function Roadmap() {
   const { user } = useContext(AuthContext);
   const { id } = useParams();
   
   const [thisRoadmap, setThisRoadmap] = useState({});
   const [title, setTitle] = useState('');
   const [desc, setDesc] = useState('');
   
   const [thisPlace, setThisPlace] = useState({});
   const [places, setPlaces] = useState([]);
   const [place, setPlace] = useState('');
   const [obs, setObs] = useState('');
   
   // const [isEmpty, setIsEmpty] = useState(true);
   const [modalRoadmap, setModalRoadmap] = useState(false);
   const [modalPlace, setModalPlace] = useState(false);
   

   useEffect(() => {
      getThisRoadmap();
      loadPlaces();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


   async function getThisRoadmap() {
      const roadmap = await firebase.firestore().collection('users')
      .doc(user.uid).collection('roadmaps')
      .doc(id).get();

      let data = {
         id: id,
         title: roadmap.data().title,
         desc: roadmap.data().desc,
         createdFormated: format(roadmap.data().created.toDate(), 'dd/MM/yyyy')
      };

      setThisRoadmap(data);
   }


   async function handleEditRoadmap(e) {
      e.preventDefault();
      
      if (title === '') {
         // validação form
         alert('invalido');
      }
      else if (title !== '' && (desc ==='' || desc !=='')) {
         await firebase.firestore().collection('users')
         .doc(user.uid).collection('roadmaps')
         .doc(id)
         .update({
            title: title,
            desc: desc
         })
         .then(() => {
            let data = {
               ...thisRoadmap,
               title: title,
               desc: desc
            };

            setThisRoadmap(data);
            // setNullname(false);
         })
         .catch()

         setModalRoadmap(false);
      }
   }

   async function handleAddPlace() {
      // if (text !== '') {
         await firebase.firestore().collection('users')
         .doc(user.uid).collection('roadmaps')
         .doc(id).collection('places')
         .add({
            place: 'Lugar de viagem',
            obs: 'Edite seu lugar de viagem adicionando um lugar desejado e observações.',
         })
         .then(() => {
            console.log('Lugar salvo.');
         })
         .catch(() => {
            console.log('Algo deu errado');
         })
         
         loadPlaces();
      // }
      // else {
      //    setNullNote(true);
      // }
   }


   async function handleDeletePlace(pid) {
      await firebase.firestore().collection('users')
      .doc(user.uid).collection('roadmaps')
      .doc(id).collection('places').doc(pid)
      .delete()
      .then(() => {
         console.log('Lugar excluído.');
      })
      .catch(() => {
         console.log('Algo deu errado.');
      })

      loadPlaces();
	}


   async function loadPlaces() {
      await firebase.firestore().collection('users')
      .doc(user.uid).collection('roadmaps')
      .doc(id).collection('places')
      .get()
      .then((snapshot) => {
         let list = [];

         snapshot.forEach((doc) => {
            list.push({
               id: doc.id,
               place: doc.data().place,
               obs: doc.data().obs,
            })
         });

         setPlaces(list);
      })
      .catch((err) => {
         console.log(err);
      })

      // setLoading(false);
   }


   async function handleEditPlace(e) {
      e.preventDefault();
      
      if (place === '') {
         // validação form
         alert('invalido');
      }
      else if (place !== '' && (obs ==='' || obs !=='')) {
         await firebase.firestore().collection('users')
         .doc(user.uid).collection('roadmaps')
         .doc(id).collection('places')
         .doc(thisPlace.id)
         .update({
            place: place,
            obs: obs
         });

         setModalPlace(false);
         loadPlaces();
      }
   }


   function handleToggleModalRoadmap() {
      setModalRoadmap(!modalRoadmap);
      
      setTitle(thisRoadmap && thisRoadmap.title);
      setDesc(thisRoadmap && thisRoadmap.desc)
   }


   function handleToggleModalPlace(place) {
      setModalPlace(!modalPlace);
      
      setThisPlace(place);
      setPlace(place.place);
      setObs(place.obs);
   }


   return (
      <Container>
         <Navbar />

         <Wrapper>
            <Content>
               <Header>
                  <TitleEdit>
                     <Title>{thisRoadmap.title}</Title>
                     <EditIcon onClick={handleToggleModalRoadmap} />
                  </TitleEdit>
                  <Desc>{thisRoadmap.desc}</Desc>
                  <Created>criado em: {thisRoadmap.createdFormated}</Created>
               </Header>

               {places.length === 0 && (
                  <Section>
                     <TitleEmpty>Você criou uma roteiro!</TitleEmpty>
                     <DescEmpty>Salve os lugares que você gosta e organize seus planos.</DescEmpty>
                     {/* e veja tudo em um mapa <p>(ou não rs.)</p> */}
                  </Section>
               )}

               <PlaceList>
                  {places.map((place, index) => (
                     <Place key={index}>
                        <Section>
                           <TitleEditPlace>
                              <TitlePlace>{place.place}</TitlePlace>
                              <div>
                                 <Edit2Icon onClick={() => handleToggleModalPlace(place)} />
                                 <TrashIcon onClick={() => handleDeletePlace(place.id)} />
                              </div>
                           </TitleEditPlace>
                           
                           <Obs>{place.obs}</Obs>
                        </Section>
                     </Place>
                  ))}
               </PlaceList>

               <Button2 onClick={handleAddPlace}>
                  <PlusIcon />
                  <span>Adicionar lugar</span>
               </Button2>

               {modalRoadmap && (
                  <Modal title='Editar roteiro'>
                     <CloseIcon onClick={handleToggleModalRoadmap} />

                     <RoadmapForm onSubmit={handleEditRoadmap}>
                        <label>
                           <p>Nome do roteiro*</p>
                           <input
                              defaultValue={title}
                              onChange={(e) => setTitle(e.target.value)}
                              type='text'
                           />
                        </label>

                        <label>
                           <p>Descrição</p>
                           <textarea
                              defaultValue={desc}
                              onChange={(e) => setDesc(e.target.value)}
                           />
                        </label>

                        <Button type='submit' span='Salvar' />
                     </RoadmapForm>
                  </Modal>
               )}

               {modalPlace && (
                  <Modal title='Criar e editar lugar'>
                     <CloseIcon onClick={() => handleToggleModalPlace(thisPlace)} />

                     <RoadmapForm onSubmit={handleEditPlace}>
                        <label>
                           <p>Nome do lugar*</p>
                           <input
                              defaultValue={place}
                              onChange={(e) => setPlace(e.target.value)}
                              type='text'
                           />
                        </label>

                        <label>
                           <p>Obervações</p>
                           <textarea
                              defaultValue={obs}
                              onChange={(e) => setObs(e.target.value)}
                              placeholder=''
                           />
                        </label>

                        <Button type='submit' span='Salvar' />
                     </RoadmapForm>
                  </Modal>
               )}
            </Content>
         </Wrapper>
      </Container>
   );
}

export default Roadmap;