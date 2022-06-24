import styled, { css } from 'styled-components';
import { RiRoadMapLine, CgFileDocument, TiWeatherWindyCloudy, MdLogout, RiArrowDropUpLine } from '../../styles/icons';

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
   display: none;
   
   @media (min-width: 425px) {
      position: fixed;
      display: block;
      left: 0;
      height: 100%;
      background: ${propps => propps.theme.colors.bg_component};
   }
   
   @media (min-width: 1024px) {
      width: 290px;
   }

   @media (min-width: 1440px) {
      width: 420px;
   }
`;

export const Wrapper = styled.div`
   padding: 35px 5px;
   height: 100%;

   @media (min-width: 1440px) {
      padding: 35px 20px;
   }
`;

export const Header = styled.header`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
`;

export const ContentTop = styled.div`
   ${flexColumnCSS};
`;

// export const Logo = styled.div`
//    margin-bottom: 24px;
//    width: 70%;

//    @media (min-width: 1024px) {
//       margin-bottom: 44px;
//       width: 54%;
//    }

//    @media (min-width: 1440px) {
//       width: 55%;
//    }
// `;

// export const ImageLogo = styled.img`
//    display: none;
//    object-fit: cover;

//    @media (min-width: 1024px) {
//       display: block;
//       width: 100%;
//    }
// `;

// export const ImageLogoMb = styled.img`
//    display: block;
//    margin: 0 auto;
//    width: 70%;
//    object-fit: cover;

//    @media (min-width: 1024px) {
//       display: none;
//    }
// `;

export const NavMenu = styled.nav`
   > a {
      display: block;
      margin: 11px 0;
      padding: 15px;
      color: ${props => props.theme.colors.text};
      border-radius: 50px;

      :hover {
         background: ${props => props.theme.colors.bg_item};
      }
   }

   > a.is-active {
      color: ${props => props.theme.colors.text_hover};
      background: ${props => props.theme.colors.bg_item};
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
      padding: 10px 10px 11px;
      
      > span {
         display: inline;
         margin-bottom: 3px;
         margin-left: 10px;
         font-size: 1.4rem;
      }
   }
`;

// export const NavMobile = styled.nav`
//    position: fixed;
//    display: flex;
//    flex-direction: row;
//    justify-content: space-around;
//    bottom: 0;
//    left: 0;
//    width: 100%;
//    z-index: 10;
// `;

export const ContentBottom = styled.div`
   ${flexColumnCSS};
`;

export const DropUpMenu = styled.div`
   position: absolute;
   bottom: 115px;
   left: 20px;
   padding: 13px;
   width: 225px;
   background: ${props => props.theme.colors.bg_item};
   border-radius: 25px;
   
   @media (min-width: 1024px) {
      position: inherit;
      margin-bottom: 30px;
      width: 80%;
   }
`;

export const ProfileDropUp = styled.div`
   ${flexRowCSS};
   margin-bottom: 16px;
   padding: 7px;
   border-radius: 15px;
   cursor: pointer;

   :hover {
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

   :hover {
      background: ${props => props.theme.colors.bg_item_hover};
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
   ${iconCSS}
`;

export const NotesIcon = styled(CgFileDocument)`
   ${iconCSS}
`;

export const WeatherIcon = styled(TiWeatherWindyCloudy)`
   ${iconCSS}
`;

export const ExitIcon = styled(MdLogout)`
   width: 25px;
   height: 25px;
`;

export const ArrowMenu = styled(RiArrowDropUpLine)`
   ${iconCSS}
   display: none;
   transition: .0s;

   @media (min-width: 1024px) {
      display: inline;
   }
`;