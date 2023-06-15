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
    height: 100vh;
  }

  body {
    background-color: ${({ theme }) => theme.colors.appBackground};
    color: ${({ theme }) => theme.colors.highContrastText};
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    user-select: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.subtleBackground};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.elementBackground};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.hoveredElementBackground};
    }
`;

export default GlobalStyle;
