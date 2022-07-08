import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';

import { Container, SearchForm, NoteForm, LabelButton, SpanErr, NoteList, Note, NoteContent, NoteFooter, TrashIcon } from './styles';

import Navbar from '../../components/Navbar';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';

function Notes() {
   const { user } = useContext(AuthContext);

   const [notes, setNotes] = useState([]);
   const [search, setSearch] = useState('');
   // const [loading, setLoading] = useState(true);
   // const [isEmpty, setIsEmpty] = useState(false);

   const [text, setText] = useState('');
   const [nullNote, setNullNote] = useState(false);


   useEffect(() => {
      loadNotes();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


   async function loadNotes() {
      await firebase.firestore().collection('users')
      .doc(user.uid).collection('notes').orderBy('created', 'desc')
      .get()
      .then((snapshot) => {
         let list = [];

         snapshot.forEach((doc) => {
            list.push({
               id: doc.id,
               text: doc.data().text,
               created: doc.data().created,
               createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
            })
         });

         setNotes(list);
      })
      .catch((err) => {
         console.log(err);
      })

      // setLoading(false);
   }


   async function handleAddNote(e) {
      e.preventDefault();

      if (text !== '') {
         await firebase.firestore().collection('users')
         .doc(user.uid).collection('notes')
         .add({
            text: text,
            created: new Date(),
         })
         .then(() => {
            console.log('Anotação salva com sucesso.');
            setText('');
         })
         .catch((err) => {
            console.log(err);
         })

         setNullNote(false);
         loadNotes();
      }
      else {
         setNullNote(true);
      }
	}


   async function handleDeleteNote(id) {
      await firebase.firestore().collection('users')
      .doc(user.uid).collection('notes').doc(id)
      .delete()
      .then(() => {
         console.log('Anotação excluído.');
      })
      .catch(() => {
         console.log('Algo deu errado.');
      })

      loadNotes();
	}


   return (
      <Container>
         <Navbar />

         <Wrapper>
            <Title title='Anotações' />

            <SearchForm onSubmit={(e) => e.preventDefault()}>
               <SearchBar>
                  <input
                     defaultValue={search}
                     onChange={(e) => setSearch(e.target.value)}
                     placeholder='Pesquisar anotação'
                     text='text'
                  />
               </SearchBar>
            </SearchForm>

            <NoteForm onSubmit={handleAddNote}>
               <p>Anotação</p>
               <textarea
                  defaultValue={text}
                  onChange={ (e) => setText(e.target.value) }
                  placeholder='Digite uma anotação...'
               />

               <LabelButton>
                  <Button type='submit' span={'Salvar'} />
                  { nullNote && <SpanErr>Não é possível salvar uma anotação vazia!</SpanErr>}
               </LabelButton>
            </NoteForm>

            <NoteList>
               {notes.filter((note) => note.text.toLowerCase().includes(search.toLowerCase().trim())).map((note, index) => (
                  <Note key={index}>
                     <NoteContent>
                        <span>{note.text}</span>
         
                        <NoteFooter>
                           <small>{note.createdFormated}</small>
                           <TrashIcon
                              onClick={() => handleDeleteNote(note.id)}
                              size='1.3em'
                           />
                        </NoteFooter>
                     </NoteContent>
                  </Note>
               ))}
            </NoteList>
         </Wrapper>
      </Container>
   );
}

export default Notes;


// if (loading) {
//    return (
//       <Container>
//          <Navbar />

//          <Wrapper>
//             <Content>
//                <Form>
//                   <label>
//                      <p>Carregando Anotações</p>
//                   </label>
//                </Form>
//             </Content>
//          </Wrapper>
//       </Container>
//    );
// }
