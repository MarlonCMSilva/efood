import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  lightPink: '#FFEBD9',
  backcolor: '#FFF8F2',
  white: '#fff'
}

export const breakPoint = {
  desktop: '1024px',
  tablet: '768px',
  cel: '425px'
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
    background-color: ${colors.backcolor};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  @media(max-width: ${breakPoint.desktop}){
    max-width: 70%;
    }
  }


  `
