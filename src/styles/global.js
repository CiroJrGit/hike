import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      -webkit-transition: background-color .3s;
      -moz-transition: background-color .3s;
      -o-transition: background-color .3s;
      -ms-transition: background-color .3s;
      transition: background-color .3s;

      p, span, svg, img, input, button, ::placeholder, textarea  {
         transition: .3s;
      }
   }

   html, body, #root {
      max-width: 100%;
      width: 100%;
      max-height: 100%;
      height: 100%;
      color: ${props => props.theme.colors.text};
      background-color: ${props => props.theme.colors.bg_root};

   }

   #root {
      display: flex;
      justify-content: center;
   }

   *, button, input {
      background: none;
      border: 0;
      font-family: -apple-system, system-ui, sans-serif;
      outline: none;
      /* BlinkMacSystemFont, "Segoe UI", Roboto, 'Helvetica Neue', Ubuntu, Arial, */
   }

   button {
      cursor: pointer;
   }

   a {
      text-decoration: none;
   }
`;