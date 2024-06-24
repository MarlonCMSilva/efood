import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerHero = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  margin-bottom: 20px;
  color: ${cores.branca};

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
  }

  p {
    font-size: 32px;
    font-weight: 100;
  }
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 200px;
  position: absolute;
  color: ${cores.branca};
`

export const Pratos = styled.p`
  font-size: 32px;
`
