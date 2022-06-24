import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../contexts/auth';

import { Link, NavLink } from 'react-router-dom';

import { Container, Wrapper, Header, ContentTop, NavMenu, NavItem, RoadMapIcon, NotesIcon, WeatherIcon, ContentBottom, DropUpMenu, ProfileDropUp, AvatarDropUp, NavProfile, ProfileItem, Avatar, AvatarImage, User, DropUpItem, ExitIcon, ArrowMenu } from './styles';
import Toggle from './Toggle';
import avatar from '../../assets/avatar.png';
// Logo, ImageLogo, ImageLogoMb,
// import logo from '../../assets/logo.svg';
// import logoMobile from '../../assets/logoMobile.svg';

function Navbar() {
   const { user } = useContext(AuthContext);
   const { signOut } = useContext(AuthContext);

   const [isOpen, setIsOpen] = useState(false);


   let menuRef = useRef();

   useEffect(() => {
      let handler = (event) => {
         if (!menuRef.current.contains(event.target)) {
            setIsOpen(false);
         }
      };

      document.addEventListener('mousedown', handler);

      return () => {
         document.removeEventListener('mousedown', handler);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


   return (
      <Container>
         <Wrapper>
            <Header>
               <ContentTop>
                  {/* <Logo>
                     <Link to='/home'>
                        <ImageLogo src={logo} alt='Hike Logo'/>
                        <ImageLogoMb src={logoMobile} alt='Hike Logo'/>
                     </Link>
                  </Logo> */}

                  <NavMenu>
                     <NavLink to='/roadmaps' activeClassName="is-active">
                        <NavItem>
                           <RoadMapIcon />
                           <span>Roteiros</span>
                        </NavItem>
                     </NavLink>

                     <NavLink to='/notes' activeClassName="is-active">
                        <NavItem>
                           <NotesIcon />
                           <span>Anotações</span>
                        </NavItem>
                     </NavLink>

                     <NavLink to='/weather' activeClassName="is-active">
                        <NavItem>
                           <WeatherIcon />
                           <span>Clima</span>
                        </NavItem>
                     </NavLink>
                  </NavMenu>
               </ContentTop>

               <ContentBottom ref={menuRef}>
                  {isOpen && (
                     <DropUpMenu>
                        <Link to='/profile'>
                           <ProfileDropUp>
                              <AvatarDropUp>
                                 <AvatarImage src={user.avatarUrl === null ? avatar : user.avatarUrl} alt='Foto perfil Hike' />
                              </AvatarDropUp>
                              <User>
                                 <p>{user.name}</p>
                                 <span>Meu perfil</span>
                              </User>
                           </ProfileDropUp>
                        </Link>

                        <DropUpItem htmlFor={Toggle}>
                           <Toggle />
                           <span>Tema</span>
                        </DropUpItem>

                        <DropUpItem onClick={ () => signOut() }>
                           <ExitIcon />
                           <span>Sair</span>
                        </DropUpItem>
                     </DropUpMenu>
                  )}

                  <NavProfile onClick={ () => setIsOpen(!isOpen) }>
                     <ProfileItem>
                        <Avatar>
                           <AvatarImage src={user.avatarUrl === null ? avatar : user.avatarUrl} alt='Foto perfil Hike' />
                        </Avatar>
                        <span>{user.name}</span>
                     </ProfileItem>

                     <ArrowMenu />
                  </NavProfile>
               </ContentBottom>
            </Header>
         </Wrapper>
      </Container>
   );
}

export default Navbar;