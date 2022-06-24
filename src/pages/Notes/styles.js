import styled from 'styled-components';
import { HiOutlineTrash } from '../../styles/icons';

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
   
   /* @media (min-width: 625px) {
      width: 500px;
   } */
`;


export const Form = styled.form`
   display: flex;
   flex-direction: column;
   margin-top: 20px;
   margin-bottom: 20px;
   padding: 30px;
   /* background: #67d7cc; */
   background: ${props => props.theme.colors.bg_component};
   border-radius: 25px;

   p {
      font-size: 1.4rem;
   }
   
   input, textarea {
      margin-bottom: 50px;
      padding: 10px 13px 12px;
      width: 100%;
      font-size: 1.2rem;
      color: #777A90;
      border-bottom: 1px ${props => props.theme.colors.bg_component} solid;

      ::placeholder {
         color: ${props => props.theme.colors.placeholder};
      }

      :focus {
         border-bottom: 1px ${props => props.theme.colors.bg_item_hover} solid;
      }
   }

   textarea {
      resize: none;
   }

   button {
      margin: 0;
      padding: 13px 0;
      width: 100%;
      font-size: 1.2rem;
      
      @media (min-width: 591px) {
         width: 150px;
      }
   }

   @media (min-width: 425px) {
      margin-top: 0;
   }
`;

export const LabelButton = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const SpanErr = styled.span`
   margin-left: 10px;
   font-size: 1.1rem;
   font-weight: 500;
   color: ${props => props.theme.colors.error};
`;

export const NoteList = styled.div`
   display: grid;
   grid-gap: 1rem;
   
   @media (min-width: 425px) {
      
   }
   
   @media (min-width: 1024px) {
      grid-template-columns: 49.2% 49.2%;
 
   }
   
   @media (min-width: 1440px) {
   }
`;


export const Note = styled.div`
   height: 300px;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 30px;
`;

export const NoteContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 27px;
   height: 100%;
`;

export const NoteFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;


export const TrashIcon = styled(HiOutlineTrash)`
   cursor: pointer;
`;