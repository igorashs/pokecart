import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import typography from './typography';

const GlobalStyle = createGlobalStyle`
 ${reset}
 ${typography}

 body {
   background-color: ${({ theme }) => theme.bodyColor}; 
 }
`;

export default GlobalStyle;
