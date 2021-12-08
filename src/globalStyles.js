import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6, {
    margin: 0px;
  }

  body {
    background-color: #fff;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }
`
