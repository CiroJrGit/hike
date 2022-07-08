import styled from 'styled-components';
import { RiDoubleQuotesL, RiDoubleQuotesR } from '../../styles/icons';


export const Container = styled.div`
   width: 100%;
`;

export const Content = styled.form`
   padding: 20px 9px;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 30px;

   button {
      margin: 23px 0 0;
      padding: 12px 32px;
      font-size: 1.1rem;
      /* border-radius: 30px; */
   }

   @media (min-width: 638px) {
      padding: 30px 60px;
   }
`;

export const Empty = styled.div`
   margin-bottom: 10px;
   padding: 25px;
   background: ${props => props.theme.colors.bg_item};
   border-radius: 30px;
`;

export const TitleEmpty = styled.p`
   margin-bottom: 16px;
   font-size: 1.5rem;
   font-weight: 500;
   text-align: center;
   color: #6D779B;
`;

export const DescEmpty = styled.p`
   margin: 5px 0;
   font-size: 1.1rem;
   text-align: center;
   color: #6D779B;
`;

export const Quote = styled.p`
   margin-bottom: 47px;
   font-size: 1.9rem;
   font-style: italic;
   color: #6D779B;
`;

export const Author = styled.p`
   text-align: end;
   font-size: 1.7rem;
   font-style: italic;
   font-weight: 400;
   color: ${props => props.theme.colors.placeholder};
`;

export const QuoteLeft = styled(RiDoubleQuotesL)`
   margin-right: 5px;
   width: 29px;
   height: 29px;
`;

export const QuoteRight = styled(RiDoubleQuotesR)`
   margin-left: 5px;
   width: 29px;
   height: 29px;
`;