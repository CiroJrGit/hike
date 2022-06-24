import React from 'react';
import { Container } from './styles';

function Button({span}) {
   return (
      <Container>
         <span>{span}</span>
      </Container>
   );
}

export default Button;