import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  div {
    box-sizing: border-box;
  }
  p {
    margin: 12px 0
  }

  * {
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
