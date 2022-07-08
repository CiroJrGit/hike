import React, { useState } from 'react';
import axios from 'axios';

import { Container, Content, Empty, TitleEmpty, DescEmpty, Quote, QuoteLeft, QuoteRight, Author } from './styles';

import Navbar from '../../components/Navbar';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import Button from '../../components/Button';

function Quotes() {
   const [data, setData] = useState({});
   const [quote, setQuote] = useState(false);
   const [empty, setEmpty] = useState(true);

   const url = `https://stoicquotesapi.com/v1/api/quotes/random`;


   async function handleQuote(e) {
      e.preventDefault();

      
      await axios.get(url)
      .then((response) => {
         setData(response.data);
         setQuote(true);
         setEmpty(false);
      })
      .catch(err => {
         console.log(err);
      })
      
   }


   return (
      <Container>
         <Navbar />

         <Wrapper>
            <Title title='Frases filosóficas' />

            <Content onSubmit={handleQuote}>
               {empty && (
                  <Empty>
                     <TitleEmpty>Precisa de alguma inspiração?</TitleEmpty>
                     <DescEmpty>Busque frases filosóficas para suas anotações ou postagens sobre suas viagens. =)</DescEmpty>
                  </Empty>
               )}

               {quote && (
                  <>
                     <Quote>
                        <QuoteLeft />
                        {data.body}
                        <QuoteRight />
                     </Quote>

                     <Author>- {data.author}</Author>
                  </>
               )}

               <Button type='submit' span='Buscar' />
            </Content>
         </Wrapper>
      </Container>
   );
}

export default Quotes;