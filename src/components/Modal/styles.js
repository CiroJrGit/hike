import styled from 'styled-components';

export const Container = styled.div`
   position: fixed;
   top: 0;
   right: -20px;
   bottom: 0;
   left: 0;
   background: rgb(0, 0, 0, 0.4);
   z-index: 999;
`;

export const ContainerModal = styled.div`
   position: fixed;
   top: 25vh;
   right: 0;
   left: 0;
   margin: 0 auto;
   padding: 20px 30px 30px;
   width: 95%;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 30px;

   button {
      margin: 60px 0 0;
      padding: 12px 24px;
      font-size: 1.1rem;
      /* border-radius: 30px; */
   }

   @media (min-width: 820px) {
      width: 820px;
   }
`;

export const Header = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 47px;
`;

export const Title = styled.span`
   margin-bottom: 3px;
   font-size: 1.5rem;
`;