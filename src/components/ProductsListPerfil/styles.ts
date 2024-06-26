import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  margin-bottom: 48px;
  padding: 8px;

  ${ButtonContainer} {
    border: 1px solid ${cores.rosa};
    width: 100%;
  }
`

export const Title = styled.h3`
  color: ${cores.textoBotao};
  font-size: 18px;
  padding: 8px;
`

export const Descricao = styled.p`
  color: ${cores.textoBotao};
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`
export const ContainerModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  max-width: 1024px;
  height: 340px;
  z-index: 1;
  background-color: ${cores.rosa};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px;
  }

  h3 {
    color: ${cores.branca};
    margin-top: 32px;
  }

  p {
    color: ${cores.branca};
    width: 600px;
    line-height: 22px;
    font-size: 14px;
    margin: 16px 32px 16px 0;
  }

  ${ButtonContainer} {
    margin-bottom: 60px;
  }
`
// width: 280px;
// height: 280px;
