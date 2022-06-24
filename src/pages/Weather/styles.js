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

export const Wrapper = styled.div`
   padding: 0 14px 20px;
   
   @media (min-width: 425px) {
      margin-left: 73px;
      padding: 60px 30px;
   }

   @media (min-width: 1024px) {
      margin-left: 290px;
      padding: 60px 120px;
   }

   @media (min-width: 1440px) {
      margin-left: 420px;
      padding: 60px 150px;
   }
`;

export const Content = styled.div`
   width: 100%; 
`;

export const Search = styled.form`
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

   @media (min-width: 1370px) {
      flex-direction: row;
   }
`;

export const WeatherData1 = styled.div`
   margin-bottom: 23px;
   color: #6D779B;

   > p {
      margin-left: 10px;
      font-size: 6rem;
   }

   > span {
      margin-left: 7px;
      font-size: 1.4rem;
   }
`;

export const City = styled.div`
   font-size: 2rem;
   color: #BBCAF3;
`;

export const WeatherData2 = styled.div`
   display: grid;
   grid-template: repeat(3, 1fr) repeat(2, 1) / 1fr repeat(3, 0) 1fr;

   span {
      margin-left: 7px;
      font-size: 1.3rem;
      color: #6D779B;
   }
`;

export const Sense = styled.div`
   grid-area: 1 / 1 / 2 / 6;
   margin-bottom: 24px;

   span {
      font-size: 1.9rem;
   }
`;

export const Max = styled.div`
   grid-area: 2 / 1 / 3 / 2;
   margin-left: 7px;
   margin-bottom: 18px;
`;

export const Humidity = styled.div`
   grid-area: 2 / 5 / 3 / 6;
   margin-left: 7px;
   margin-bottom: 18px;
`;

export const Min = styled.div`
   grid-area: 3 / 1 / 4 / 2;
   margin-left: 14px;
`;

export const Wind = styled.div`
   grid-area: 3 / 5 / 4 / 6;
   margin-left: 14px;
`;

export const SensIcon = styled(FaTemperatureHigh)`
   ${iconCSS};
   width: 24px;
   height: 24px;
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