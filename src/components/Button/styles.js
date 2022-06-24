import styled from 'styled-components';

export const Container = styled.button`
   margin: 47px 0 20px;
   padding: 19px 0;
   font-size: 1.3rem;
   font-weight: bold;
   text-align: center;
   letter-spacing: 0.03rem;
   color: #f8f8f8;
   background: linear-gradient(90deg, rgba(83,17,185,1) 0%, rgba(118,47,227,1) 35%, rgba(156,90,217,1) 100%);
   border: none;
   border-radius: 11px;
   cursor: pointer;

   > span {
      margin-bottom: 5px;
   }

   :hover {
      filter: brightness(1.2);
   }
`;