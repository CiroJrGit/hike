import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';

import { Container, SearchForm, RoadmapForm, LabelButton, SpanErr, RoadMList, Roadmap, RoadmapContent, RoadmapFooter, TrashIcon } from './styles';

import Navbar from '../../components/Navbar';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';

function Roadmaps() {
   const { user } = useContext(AuthContext);

   const [roadmaps, setRoadmaps] = useState([]);
   const [search, setSearch] = useState('');

   const [title, setTitle] = useState('');
   const [nullRoadmap, setNullRoadmap] = useState(false);


   useEffect(() => {
      loadRoadmaps();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


   async function loadRoadmaps() {
      await firebase.firestore().collection('users')
      .doc(user.uid).collection('roadmaps').orderBy('created', 'desc') //POR ENQUANTO SEM LISTA INFINITA 
      .get()
      .then((snapshot) => {
         let list = [];

         snapshot.forEach((doc) => {
            list.push({
               id: doc.id,
               title: doc.data().title,
               desc: doc.data().desc,
               created: doc.data().created,
               createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
            })
         });

         setRoadmaps(list);
      })
      .catch((err) => {
         console.log(err);
      })

      // setLoading(false);
   }


   async function handleAddRoadmap(e) {
      e.preventDefault();

      if (title !== '') {
         await firebase.firestore().collection('users')
         .doc(user.uid).collection('roadmaps')
         .add({
            title: title,
            desc: null,
            created: new Date(),
         })
         .then(() => {
            console.log('Roteiro criado com sucesso.');
            setTitle('');
         })
         .catch((err) => {
            console.log(err);
         })

         setNullRoadmap(false);
         loadRoadmaps();
      }
      else {
         setNullRoadmap(true);
      }
   }

   async function handleDeleteRoadap(id) {
      await firebase.firestore().collection('users')
      .doc(user.uid).collection('roadmaps').doc(id)
      .delete()
      .then(() => {
         console.log('Roteiro excluído.');
      })
      .catch(() => {
         console.log('Algo deu errado.');
      })

      loadRoadmaps();
	};

   return (
      <Container>
         <Navbar />

         <Wrapper>
            <Title title='Roteiros' />

            <SearchForm onSubmit={(e) => e.preventDefault()}>
               <SearchBar>
                  <input
                     defaultValue={search}
                     onChange={(e) => setSearch(e.target.value)}
                     placeholder='Pesquisar roteiro'
                     text='text'
                  />
               </SearchBar>
            </SearchForm>

            <RoadmapForm onSubmit={handleAddRoadmap}>
               <p>Crie um roteiro</p>
               <textarea
                  defaultValue={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Título do roteiro'
               />

               <LabelButton>
                  <Button type='submit' span={'Criar'} />
                  { nullRoadmap && <SpanErr>Digite um título para o roteiro.</SpanErr>}
               </LabelButton>
            </RoadmapForm>

            <RoadMList>
               {roadmaps.filter((roadmap) => roadmap.title.toLowerCase().includes(search.toLowerCase().trim())).map((roadmap, index) => (
                  <Roadmap key={index}>
                     <Link to={`/roadmap/${roadmap.id}`} draggable='false'>
                        <RoadmapContent>
                           <RoadmapFooter>
                              <p>{roadmap.title}</p>
                              <span>{roadmap.desc}</span>
                           </RoadmapFooter>

                           <small>criado em: {roadmap.createdFormated}</small>
                        </RoadmapContent>
                     </Link>
                     <TrashIcon
                        onClick={() => handleDeleteRoadap(roadmap.id)}
                        size='1.3em'
                     />
                  </Roadmap>
               ))}
            </RoadMList>
         </Wrapper>
      </Container>
   );
}

export default Roadmaps;