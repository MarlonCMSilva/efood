import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  textoBotao: '#FFEBD9',
  fundo: '#FFF8F2',
  branca: '#fff'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    box-sizing:border-box;
    list-style: none;
  }


  body {
    background-color: ${cores.fundo};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  `
