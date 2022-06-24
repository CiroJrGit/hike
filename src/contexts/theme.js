import { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';


export const ThemesContext = createContext({});

export const AppTheme = ({children}) => {
   const [theme, setTheme] = useState(light);

   const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
   };

   return (
      <ThemesContext.Provider value={{ toggleTheme }}>
         <ThemeProvider theme={theme}>
               {children}
         </ThemeProvider>
      </ThemesContext.Provider>
   );
}

export default ThemeProvider;