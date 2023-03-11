import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body, 
  main, 
  #__next {
    margin: 0;
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.appBackground};
    color: ${({ theme }) => theme.colors.highContrastText};
  }
`;

export default GlobalStyle;
