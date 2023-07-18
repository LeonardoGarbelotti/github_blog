import { createGlobalStyle } from 'styled-components'
// import firaCode from '../assets/fonts/FiraCode-Regular.woff'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['base-border']};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['brand-blue']};
      border-radius: 999px;
    }
  }

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${(props) => props.theme['text-text-m']} 'Nunito', sans-serif;
    line-height: 160%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`
