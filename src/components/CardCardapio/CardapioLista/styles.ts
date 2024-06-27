import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  width: 320px;
  height: 100%;

  > img {
    width: 300px;
    height: 180px;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Title = styled.h3`
  color: ${cores.textoBotao};
  font-size: 18px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  color: ${cores.textoBotao};
  font-size: 14px;
  line-height: 22px;
  width: 304px;
  heith: 88px;
  padding: 8px;
  margin-bottom: 8px;
`

export const ButtonContainer = styled.button`
  border: 1px solid ${cores.rosa};
  width: 100%;
  max-width: 300px;
  background-color: ${cores.textoBotao};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  border: 1px solid ${cores.rosa};
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
  background-color: ${cores.rosa};
  height: 340px;
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px;
    display: block;
  }

  h3 {
    color: ${cores.branca};
    margin-top: 32px;
  }

  p {
    color: ${cores.branca};
    width: 600px;
    heioght: 180px;
    line-height: 22px;
    font-size: 14px;
    margin: 20px 32px 20px 0;
    display: block;
  }

  ${ButtonContainer} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`
