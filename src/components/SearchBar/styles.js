import styled from 'styled-components';
import { RiSearchLine } from '../../styles/icons';

export const Container = styled.div`
   width: 100%;
`;

export const LabelSearch = styled.label`
   display: flex;
   flex-direction: row-reverse;
   align-items: center;
   padding: 0 25px;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 50px;
   outline: 0;

   svg {
      margin-right: 13px;
      width: 23px;
      height: 23px;
      fill: #6D779B;
   }

   input {
      margin-bottom: 4px;
      width: 100%;
      height: 55px;
      font-size: 1.2rem;
      color: ${props => props.theme.colors.text};

      &::placeholder {
         color: #6D779B;
      }

      &:focus, &:focus + svg {
         fill: ${props => props.theme.colors.text_hover};

         &::placeholder {
            color: ${props => props.theme.colors.text_hover};
         }
      }
   }
`;

export const SearchIcon = styled(RiSearchLine)``;