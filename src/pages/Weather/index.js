import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Wrapper, Content, Search, SpanErr, WeatherDiv, WeatherData1, City, WeatherData2, Sense, Max, Min, Humidity, Wind, SensIcon, MaxIcon, MinIcon, HumIcon, WinIcon } from './styles';
import { SearchIcon, SearchInput } from '../../components/searchBar';

import Navbar from '../../components/Navbar';


function Weather() {
   const [data, setData] = useState({});
   const [location, setLocation,] = useState('');
   const [error, setError] = useState(false);

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c31525bc7b1edcaea7ca46ca41e141e9`;


   async function searchLocation(e) {
      e.preventDefault();
    
      
      await axios.get(url)
      .then((response) => {
         setData(response.data);
         setError(false);
      })
      .catch(err => {
         setError(true);
         console.log(err);
      })

      setLocation('');
   }

   return (
      <Container>
         <Navbar />

         <Wrapper>
            <Content>
               <Search onSubmit={searchLocation}>
                  <SearchIcon />
         
                  <SearchInput
                     defaultValue={location}
                     onChange={ (e) => setLocation(e.target.value) }
                     placeholder='Pesquise o clima de um local...'
                     text='text'
                  />

                  { error && <SpanErr>Local inválido, digite novamente.</SpanErr> }
               </Search>

               <WeatherDiv>
                  <WeatherData1>
                     <City>{data?.name}</City>
                     <p>{data.main ? data.main.temp.toFixed() : null}°C</p>
                     <span></span>
                  </WeatherData1>

                  <WeatherData2>
                     <Sense>
                        <SensIcon /><span>Sensação Térmica: {data.main ? data.main.feels_like.toFixed() : null}°C</span>
                     </Sense>
                     <Max>
                        <MaxIcon /><span>Máxima: {data.main ? data.main.temp_max.toFixed() : null}°C</span>
                     </Max>
                     <Humidity>
                        <HumIcon /><span>Umidade: {data.main ? data.main.temp_min.toFixed() : null}%</span>
                     </Humidity>
                     <Min>
                        <MinIcon /><span>Mínima: {data.main ? data.main.temp_min.toFixed() : null}°C</span>
                     </Min>
                     <Wind>
                        <WinIcon /><span>Ventos: {data.main ? data.main.temp_min.toFixed() : null}km/h</span>
                     </Wind>
                  </WeatherData2>  

               </WeatherDiv>
            </Content>
         </Wrapper>
      </Container>
   );
}

export default Weather;