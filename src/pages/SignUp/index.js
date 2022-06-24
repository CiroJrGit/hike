import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import { validateEmail, validatePassword } from '../../utils/regex';

import { Container, Wrapper, Logo, ImageLogo, Form } from './styles';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';

function SignUp() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

   const [nameErr, setNameErr] = useState(false);
   const [emailErr, setEmailErr] = useState(false);
	const [passwordErr, setPasswordErr] = useState(false);

   const { signUp } = useContext(AuthContext);

   let validate = false;

   
   function validadeSignUp() {
      if (name === '') {
         setNameErr(true);
         validate = false;
         return;
      }
      else {
         setNameErr(false);
         validate = true;
      }

      if (email === '' || !validateEmail.test(email)) {
         setEmailErr(true);
         validate = false;
         return;
      }
      else {
         setEmailErr(false);
         validate = true;
      }

      if (password === '' || !validatePassword.test(password)) {
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
      validadeSignUp();

      if (validate) {
         signUp(name, email, password);
      }
   }

   return (
		<Container>
	  		<Wrapper>
				<Logo>
               <ImageLogo src={logo} alt='Hike Logo'/>
            </Logo>

				<Form onSubmit={handleSubmit}>
               <label>
					   <input type='text'placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
                  { nameErr && <span>Campo Nome obrigatório</span> }
               </label>

               <label>
					   <input type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                  { emailErr && <span>E-mail inválido. Digite novamente.</span> }
               </label>

               <label>
					   <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                  { passwordErr && <span>A senha deve conter no mínimo 8 caracteres e uma letra.</span> }
               </label>

					<Button type='submit' span='Criar conta'/>
				</Form>

				<Link to='/'>Entrar</Link>
			</Wrapper>
		</Container>
  );
}

export default SignUp;