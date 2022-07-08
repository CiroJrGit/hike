import styled, { css } from 'styled-components';
import { IoMdClose, BsThreeDots, BiMessageSquareEdit, HiOutlineTrash, BiPlusCircle } from '../../../styles/icons';

const iconCSS = css`
   color: #6D779B;
   cursor: pointer;
`;

export const Container = styled.div`
   width: 100%;
`;

export const Content = styled.div`
   padding: 27px 9px;
   width: 100%;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 30px;

   @media (min-width: 620px) {
      padding: 27px 30px;
      min-height: 89vh;
   }
   
   @media (min-width: 1368px) {
      width: 85%;
   }
`;

export const Header = styled.div`
   margin-bottom: 40px;
   padding: 0 13px;
`;

export const TitleEdit = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 26px;
`;

export const Title = styled.p`
   font-size: 1.6rem;
   font-weight: 500;
`;

export const Desc = styled.p`
   margin: 5px 0;
   font-size: 1.15rem;
   word-wrap: break-word;
`;

export const Created = styled.small`
   font-size: 0.9rem;
   color: ${props => props.theme.colors.placeholder};
`;

export const Section = styled.div`
   margin-bottom: 10px;
   padding: 25px;
   background: ${props => props.theme.colors.bg_item};
   border-radius: 30px;

   @media (min-width: 1368px) {
      width: 90%;
   }
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

export const PlaceList = styled.div``;

export const Place = styled.div`
   margin-bottom: 18px;

   > div {
      min-height: 260px;
   }
`;

export const TitleEditPlace = styled.div`
   display: flex;
   justify-content: space-between;

   div {
      display: flex;
      /* flex-direction: column; */
   }

   svg {
      width: 20px;
      height: 20px;
   }
`;

export const TitlePlace = styled.p`
   margin-bottom: 16px;
   font-size: 1.3rem;
   font-weight: 500;
`;

export const Obs = styled.p`
   margin: 15px 5px 5px;
   color: #6D779B;
`;

export const Button2 = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 10px;
   padding: 16px 30px;
   font-size: 1.2rem;
   font-weight: 500;
   color: #6D779B;
   background: ${props => props.theme.colors.bg_item};
   border-radius: 30px;

   span {
      margin-bottom: 3px;
   }

   &:hover {
      background: ${props => props.theme.colors.bg_item_hover};
   }

   @media (min-width: 1368px) {
      width: 90%;
   }
`;

export const RoadmapForm = styled.form`
   p {
      padding-bottom: 13px;
      font-size: 1.1rem;
   }

   input, textarea {
      margin-bottom: 25px;
      padding: 10px 13px 12px;
      width: 100%;
      font-size: 1.2rem;
      color: #777A90;
      border: 1px ${props => props.theme.colors.input_border} solid;
      border-radius: 7px;
      resize: none;

      &::placeholder {
         color: ${props => props.theme.colors.placeholder};
      }

      &:focus {
         border-color: #762FE3;
      }
   }
`;

export const CloseIcon = styled(IoMdClose)`
   position: absolute;
   top: 25px;
   right: 30px;
   width: 27px;
   height: 27px;
   cursor: pointer;
`;

export const EditIcon = styled(BsThreeDots)`
   ${iconCSS};
   width: 33px;
   height: 33px;
`;

export const Edit2Icon = styled(BiMessageSquareEdit)`
   ${iconCSS};
   margin-right: 7px;
`;

export const TrashIcon = styled(HiOutlineTrash)`
   ${iconCSS};
`;

export const PlusIcon = styled(BiPlusCircle)`
   margin-right: 4px;
   width: 22px;
   height: 22px;
`;