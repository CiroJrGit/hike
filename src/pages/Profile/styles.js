import styled from 'styled-components';
import { TbCameraPlus } from '../../styles/icons';


export const Container = styled.div`
   display: flex;
   align-items: center;
   width: 100%;

   @media (min-width: 425px) {
      display: block;
   }
`;

export const Wrapper = styled.div`
   padding: 0 14px;
   
   @media (min-width: 425px) {
      margin-left: 73px;
      padding: 60px 30px 0;
   }

   @media (min-width: 1024px) {
      margin-left: 290px;
      padding: 60px 120px 0;
   }

   @media (min-width: 1440px) {
      margin-left: 420px;
      padding: 60px 150px 0;
   }
`;

export const Content = styled.div`
   padding: 30px 30px 30px 70px;
   width: 100%;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 30px;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 50%;

   button {
      width: 100px;
      margin-top: 15px;
      padding: 9px 0 12px;
      font-size: 1.2rem;
   }
`;

export const User = styled.div`
   display: flex;
   align-items: center;
   padding-bottom: 60px;
`;

export const LabelImage = styled.label`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 180px;
   height: 180px;
   border-radius: 100%;
   overflow: hidden;
   cursor: pointer;

   > span {
      position: absolute;
      color: #f8f8f8;
      opacity: 0.7;
      z-index: 99;
   }

   > input {
      display: none;
   }

   > img {
      width: 100%;
      border-radius: 100%;
      object-fit: cover;
   }

   :hover img {
      filter: brightness(60%)
   }

   :hover span {
      opacity: 1;
   }
`;

export const InfoUser = styled.span`
   margin-left: 23px;

   > p {
      font-size: 1.5rem;
      font-weight: 500;
      transition: .0s;
   }

   > span {
      font-size: 1.2rem;
      color: #777A90;
      transition: .0s;
   }
`;

export const LabelInput = styled.label`
   margin-bottom: 50px;

   > p {
      padding-bottom: 13px;
      font-size: 1.1rem;
   }

   > input {
      margin-bottom: 3px;
      padding: 10px 13px 12px;
      width: 100%;
      font-size: 1.2rem;
      color: #777A90;
      border: 1px ${props => props.theme.colors.input_border} solid;
      border-radius: 7px;

      ::placeholder {
         color: ${props => props.theme.colors.placeholder};
      }

      :focus {
         border-color: #762FE3;
      }

      :disabled {
         background: ${props => props.theme.colors.bg_component};
         opacity: 0.6;
      }
   }
`;

export const SpanErr = styled.span`
   padding-bottom: 10px;
   font-size: 1.05rem;
   font-weight: 500;
   color: ${props => props.theme.colors.error};
`;


export const UpLoadIcon = styled(TbCameraPlus)`
   width: 50px;
   height: 50px;
`;