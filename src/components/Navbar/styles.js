import styled, { css } from 'styled-components';
import { RiRoadMapLine, BsJournalText, BsChatQuote, BsClouds, MdLogout, RiArrowDownSFill, RiArrowDropUpLine } from '../../styles/icons';

const flexColumnCSS = css`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const flexRowCSS = css`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

const avatarCSS = css`
   display: flex;
   align-items: center;
   flex-shrink: 0;
   border-radius: 50px;
`;

const iconCSS = css`
   flex-shrink: 0;
   width: 33px;
   height: 33px;
`;



export const Container = styled.div`
   position: fixed;
   bottom: 0;
   width: 100%;
   background: ${propps => propps.theme.colors.bg_component};
   
   @media (min-width: 425px) {
      left: 0;
      width: auto;
      height: 100%;
   }
   
   @media (min-width: 1024px) {
      width: 290px;
   }

   @media (min-width: 1440px) {
      width: 420px;
   }
`;

export const Wrapper = styled.div`
   padding: 10px;
   width: 100%;

   @media (min-width: 425px) {
      padding: 35px 5px;
      width: auto;
      height: 100%;

   }

   @media (min-width: 1440px) {
      padding: 35px 20px;
   }
`;

export const Header = styled.header`
   display: flex;
   flex-direction: row-reverse;
   justify-content: space-between;
   
   @media (min-width: 425px) {
      flex-direction: column;
      height: 100%;
   }
`;

export const ContentTop = styled.div`
   ${flexRowCSS};
   width: 100%;

   @media (min-width: 425px) {
      ${flexColumnCSS};
   }
`;

export const NavMenu = styled.nav`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 100%;

   > a {
      display: inline-flex;
      align-items: center;
      color: ${props => props.theme.colors.text};
      border-radius: 50px;

      &:hover {
         background: ${props => props.theme.colors.bg_item};
      }
   }

   > a.is-active {
      color: ${props => props.theme.colors.text_hover};
   }
   
   @media (min-width: 425px) {
      flex-direction: column;

      > a {
         display: block;
         margin: 0 0 7px;
         padding: 15px;
      }

      > a.is-active {
         color: ${props => props.theme.colors.text_hover};
         background: ${props => props.theme.colors.bg_item};
      }
   }

   @media (min-width: 1024px) {
      width: 80%;
      
      > a {
         padding: 8px 23px;
      }
   }
`;

export const NavItem = styled.div`
   display: flex;
   align-items: center;
   flex-shrink: 0;
   
   > span {
      display: none;
   }
   
   @media (min-width: 1024px) {
      padding: 10px 10px;
      
      > span {
         display: inline;
         margin-bottom: 3px;
         margin-left: 13px;
         font-size: 1.4rem;
      }
   }
`;

export const ContentBottom = styled.div`
   ${flexColumnCSS};
`;

export const DropUpMenu = styled.div`
   position: absolute;
   bottom: 83px;
   left: 7px;
   padding: 13px;
   width: 225px;
   background: ${props => props.theme.colors.bg_item};
   border-radius: 25px;
   
   @media (min-width: 425px) {
      bottom: 115px;
   }
   
   @media (min-width: 1024px) {
      position: inherit;
      margin-bottom: 30px;
      left: 20px;
      width: 80%;
   }
`;

export const ProfileDropUp = styled.div`
   ${flexRowCSS};
   margin-bottom: 16px;
   padding: 7px;
   border-radius: 15px;
   cursor: pointer;

   &:hover {
      background: ${props => props.theme.colors.bg_item_hover};
   }
`;

export const AvatarDropUp = styled.div`
   ${avatarCSS};
   margin-right: 8px;
   width: 52px;
   border-radius: 100%;
   overflow: hidden;

   @media (min-width: 1440px) {
      width: 62px;
   }
`;

export const User = styled.div`
   display: flex;
   flex-direction: column;

   > p {
      font-size: 1.1rem;
      color: ${props => props.theme.colors.text};
   }

   > span {
      font-size: 1rem;
      color: #A0AAAE;
   }
`;

export const DropUpItem = styled.label`
   ${flexRowCSS};
   margin-bottom: 2px;
   padding: 6px 17px;
   border-radius: 15px;
   cursor: pointer;

   > div {
      margin-right: 14px;
   }

   > svg {
      margin-left: 4px;
      margin-right: 18px;
   }

   > span {
      margin-bottom: 3px;
      font-size: 1.2rem;
   }

   &:hover {
      background: ${props => props.theme.colors.bg_item_hover};
   }
`;

export const SpanDot = styled.div`
   display: flex;
   justify-content: flex-start;
   width: 100%;

   @media (min-width: 1024px) {
      justify-content: center;
   }
`;

export const NavProfile = styled.button`
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-size: 1.28rem;
   color: ${props => props.theme.colors.text};
   background: ${props => props.theme.colors.bg_component};
   border-radius: 50px;

   span {
      display: none;
   }

   @media (min-width: 1024px) {
      padding: 15px 13px;
      width: 80%;
      background: ${props => props.theme.colors.bg_item};

      span {
         display: inline;
         margin-left: 0;
         font-size: 1.1rem;
      }
   }
`;

export const ProfileItem = styled.div`
   ${flexRowCSS};

   span {
      transition: .0s;
   }
`;

export const Avatar = styled.div`
   ${avatarCSS};
   width: 45px;
   height: 45px;
   border-radius: 100%;
   overflow: hidden;

   @media (min-width: 1024px) {
      margin-right: 8px;
   }
`;

export const AvatarImage = styled.img`
   width: 100%;
   border-radius: 100%;
   object-fit: cover;
`;


export const RoadMapIcon = styled(RiRoadMapLine)`
   flex-shrink: 0;
   width: 29px;
   height: 29px;
`;

export const NotesIcon = styled(BsJournalText)`
   flex-shrink: 0;
   width: 28px;
   height: 25px;
`;

export const QuotesIcon = styled(BsChatQuote)`
   flex-shrink: 0;
   width: 28px;
   height: 27px;
`;

export const WeatherIcon = styled(BsClouds)`
   flex-shrink: 0;
   width: 30px;
   height: 30px;
`;

export const ExitIcon = styled(MdLogout)`
   width: 25px;
   height: 25px;
`;

export const Dot = styled(RiArrowDownSFill)`
   position: absolute;
   bottom: -26px;
   width: 45px;
   height: 45px;
   fill: ${props => props.theme.colors.bg_item};
   
   
   @media (min-width: 1024px) {
      bottom: 114px;
   }
`;

export const ArrowMenu = styled(RiArrowDropUpLine)`
   ${iconCSS}
   display: none;
   transition: .0s;

   @media (min-width: 1024px) {
      display: inline;
   }
`;