import React, { useState } from 'react';
import axios from 'axios';

import { Container, SearchForm, SpanErr, WeatherDiv, WeatherData1, City, WeatherData2, Sense, Max, Min, Humidity, Wind, SensIcon, MaxIcon, MinIcon, HumIcon, WinIcon } from './styles';

import Navbar from '../../components/Navbar';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';


function Weather() {
   const [data, setData] = useState({});
   const [location, setLocation,] = useState('');
   const [error, setError] = useState(false);

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c31525bc7b1edcaea7ca46ca41e141e9`;


   async function handleSearchLocation(e) {
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
            <Title title='Clima' />

            <SearchForm onSubmit={handleSearchLocation}>
               <SearchBar>
                  <input
                     defaultValue={location}
                     onChange={(e) => setLocation(e.target.value)}
                     placeholder='Pesquisar lugar'
                     text='text'
                  />
               </SearchBar>

               { error && <SpanErr>Local inválido, digite novamente.</SpanErr> }
            </SearchForm>

            <WeatherDiv>
               <WeatherData1>
                  <City>{data.name}</City>
                  <p>{data.main ? data.main.temp.toFixed() : null}°C</p>
                  <span>{data.weather ? data.weather[0].main : null}</span>
               </WeatherData1>

               <WeatherData2>
                  <Sense>
                     <SensIcon /><span>Sensação Térmica: {data.main ? data.main.feels_like.toFixed() : null}°C</span>
                  </Sense>
                  <Max>
                     <MaxIcon /><span>Máxima: {data.main ? data.main.temp_max.toFixed() : null}°C</span>
                  </Max>
                  <Humidity>
                     <HumIcon /><span>Umidade: {data.main ? data.main.humidity : null}%</span>
                  </Humidity>
                  <Min>
                     <MinIcon /><span>Mínima: {data.main ? data.main.temp_min.toFixed() : null}°C</span>
                  </Min>
                  <Wind>
                     <WinIcon /><span>Ventos: {data.wind ? data.wind.speed : null}km/h</span>
                  </Wind>
               </WeatherData2>  

            </WeatherDiv>
         </Wrapper>
      </Container>
   );
}

export default Weather;