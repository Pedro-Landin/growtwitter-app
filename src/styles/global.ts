import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* Box sizing reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove margens padrão */
  * {
    margin: 0;
    padding: 0;
  }

  /* Melhor renderização de texto */
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    font-family: 'Karla', sans-serif;
    background-color: ${(props) => props.theme.colors.backgrounColor};
  }

  /* Remove estilos padrão de listas */
  ul, ol {
    list-style: none;
  }

  /* Links sem decoração padrão */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Imagens responsivas por padrão */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Inputs e botões herdando fonte */
  input, button, textarea, select {
    font: inherit;
    border: none;
    outline: none;
    background: none;
  }

  /* Evita overflow de texto */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* Root stacking context */
  #root, #__next {
    isolation: isolate;
  }
`;