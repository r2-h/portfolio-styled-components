import { theme } from '@/styles/themes'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    background-color: ${theme.colors.bGround.dark};
    color: ${theme.colors.text.dark};
  }

  a {
    text-decoration: none;
    color: ${theme.colors.text.dark};
  }

  li {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }
`
