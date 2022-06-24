import styled from 'styled-components';
import { RiSearchLine } from '../styles/icons';

export const Container = styled.div`
   display: flex;
   align-items: center;
`;

export const SearchInput = styled.input`
   padding: 10px 60px 12px;
   width: 100%;
   height: 54px;
   font-size: 1.2rem;
   color: ${props => props.theme.colors.text};
   background: ${props => props.theme.colors.bg_component};
   border: 2px transparent solid;
   border-radius: 50px;
   outline: 0;

   ::placeholder {
      color: #6D779B;
   }

   :focus, :focus + svg {
      border-color: ${props => props.theme.colors.text_hover};
      fill: ${props => props.theme.colors.text_hover};
   }

   
`;

export const SearchIcon = styled(RiSearchLine)`
   position: relative;
   top: 42px;
   left: 21px;
   width: 23px;
   height: 23px;
   fill: #6D779B;
   z-index: 1;
`;