import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import { Container, Wrapper, Logo, SpanErr, ImageLogo, Form } from './styles';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';

function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

   const [emailErr, setEmailErr] = useState(false);
	const [passwordErr, setPasswordErr] = useState(false);

   const { signIn, access, setAccess } = useContext(AuthContext);

   let validate = false;


   useEffect(() => {
      setAccess(false);
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   function validadeSignIn() {
      setAccess(false);

      if (email === '') {
         setEmailErr(true);
         validate = false;
         return;
      }
      else {
         setEmailErr(false);
         validate = true;
      }

      if (password === '') {
         setPasswordErr(true);
         validate = false;
         return;
      }
      else {
         setPasswordErr(false);
         validate = true;
      }

   }

   function handleSubmit(e) {
      e.preventDefault();
      validadeSignIn();
      
      if (validate) {
         signIn(email, password);
      }
   }

   return (
		<Container>
	  		<Wrapper>
				<Logo>
               <ImageLogo src={logo} alt='Hike Logo'/>
            </Logo>

            { access && <SpanErr>Email ou senha incorretos. Tente novamente.</SpanErr> }

				<Form onSubmit={handleSubmit}>
               <label>
					   <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                  { emailErr && <span>Preencha com seu email.</span> }
               </label>

               <label>
					   <input type='password'placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                  { passwordErr && <span>Preencha com sua senha.</span> }
               </label>
					<Button type='submit' span='Entrar'/>
				</Form>

				<Link to='/signup'>Criar uma conta</Link>
			</Wrapper>
		</Container>
  );
}

export default SignIn;