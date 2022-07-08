import styled from 'styled-components';
import { HiOutlineTrash } from '../../styles/icons';

export const Container = styled.div`
   width: 100%;
`;

export const SearchForm = styled.form`
   margin-bottom: 33px;
`;

export const RoadmapForm = styled.form`
   display: flex;
   flex-direction: column;
   margin-top: 20px;
   margin-bottom: 20px;
   padding: 30px;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 30px;

   p {
      font-size: 1.4rem;
   }
   
   input, textarea {
      margin-bottom: 50px;
      padding: 10px 13px 12px;
      width: 100%;
      font-size: 1.2rem;
      color: ${props => props.theme.colors.text};
      border-bottom: 1px ${props => props.theme.colors.bg_component} solid;

      &::placeholder {
         color: ${props => props.theme.colors.placeholder};
      }

      &:focus {
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

export const RoadMList = styled.div`
   display: grid;
   grid-gap: 1rem;
   
   @media (min-width: 1024px) {
      grid-template-columns: 49.2% 49.2%;
   }

   a {
      min-height: 310px;
      color:  ${props => props.theme.colors.text};
   }
`;

export const Roadmap = styled.div`
   position: relative;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 30px;
   height: 300px;
`;

export const RoadmapContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 27px;
   height: 100%;

   p {
      margin-bottom: 15px;
      font-size: 1.6rem;
      word-wrap: break-word;
   }
   
   span {
      display: block;
      font-size: 1.2rem;
      color: #6D779B;
      word-wrap: break-word;
   }
`;

export const RoadmapFooter = styled.div`
   display: flex;
   flex-direction: column;
`;

export const TrashIcon = styled(HiOutlineTrash)`
   position: absolute;
   right: 20px;
   bottom: 23px;
   cursor: pointer;
`;