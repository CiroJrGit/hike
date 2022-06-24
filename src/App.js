import React from 'react';
import GlobalStyle from './styles/global';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider  from './contexts/auth';
import { AppTheme } from './contexts/theme';


function App() {

  return (
      <AppTheme>
      <AuthProvider>
         <BrowserRouter>
            <GlobalStyle />

            <Routes />
         </BrowserRouter>
      </AuthProvider>
      </AppTheme>
  );
}

export default App;