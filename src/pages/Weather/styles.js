import styled, { css } from 'styled-components';
import { FaTemperatureHigh, HiArrowNarrowUp, HiArrowNarrowDown, FaWind, ImDroplet } from '../../styles/icons';

const iconCSS = css`
   color: #6D779B;
   width: 20px;
   height: 20px;
`;


export const Container = styled.div`
   width: 100%;
`;

export const SearchForm = styled.form`
   margin-bottom: 33px;
`;

export const SpanErr = styled.span`
   display: block;
   margin: 7px 15px 0;
   font-size: 1.1rem;
   font-weight: 500;
   color: ${props => props.theme.colors.error};
`;

export const WeatherDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   padding: 50px 65px;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 30px;

   @media (min-width: 1580px) {
      flex-direction: row;
   }
`;

export const WeatherData1 = styled.div`
   margin-bottom: 23px;
   color: #6D779B;

   > p {
      margin-left: 10px;
      font-size: 6.2rem;
   }

   > span {
      margin-left: 7px;
      font-size: 1.4rem;
   }
`;

export const City = styled.div`
   font-size: 2rem; //diminuir 
   color: #BBCAF3;
`;

export const WeatherData2 = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr repeat(4, 0.5fr);
   text-align: center;

   @media (min-width: 612px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 2fr repeat(2, 1.5fr);
   }

   span {
      font-size: 1.3rem;
      color: #6D779B;
   }
`;

export const Sense = styled.div`
   grid-area: 1 / 1 / 2 / 2;
   margin-bottom: 27px;
   
   span {
      margin-left: 8px;
      font-size: 2rem;
   }
   
   @media (min-width: 612px) {
      grid-area: 1 / 1 / 2 / 6;
   }
`;

export const Max = styled.div`
   grid-area: 2 / 1 / 3 / 2;

   @media (min-width: 612px) {
      grid-area: 2 / 1 / 3 / 3;
   }
`;

export const Humidity = styled.div`
   grid-area: 3 / 1 / 4 / 2;

   span {
      margin-left: 7px;
   }

   @media (min-width: 612px) {
      grid-area: 2 / 3 / 3 / 5;
   }
`;

export const Min = styled.div`
   grid-area: 4 / 1 / 5 / 2;

   @media (min-width: 612px) {
      grid-area: 3 / 1 / 4 / 3;
   }
`;

export const Wind = styled.div`
   grid-area: 5 / 1 / 6 / 2;

   span {
      margin-left: 7px;
   }

   @media (min-width: 612px) {
      grid-area: 3 / 3 / 4 / 5;
   }
`;

export const SensIcon = styled(FaTemperatureHigh)`
   ${iconCSS};
   width: 28px;
   height: 28px;
`;

export const MaxIcon = styled(HiArrowNarrowUp)`
   ${iconCSS};
`;

export const MinIcon = styled(HiArrowNarrowDown)`
   ${iconCSS};
`;

export const HumIcon = styled(FaWind)`
   ${iconCSS};
`;

export const WinIcon = styled(ImDroplet)`
   ${iconCSS};
`;