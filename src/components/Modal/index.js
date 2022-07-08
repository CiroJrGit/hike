import React from 'react';

import { Container, ContainerModal, Header, Title } from './styles';

function Modal({ title, children, close }) {
   return (
      <Container>
         <ContainerModal>
            <Header>
               <Title>{title}</Title>
            </Header>

            {children}
         </ContainerModal>
      </Container>
   );
}

export default Modal;