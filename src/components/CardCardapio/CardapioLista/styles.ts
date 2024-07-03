import styled from 'styled-components'
import { breakPoint, cores } from '../../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  width: 320px;
  height: 100%;

  @media (max-width: ${breakPoint.desktop}) {
    width: 240px;
  }

  @media (max-width: ${breakPoint.tablet}) {
    width: 300px;
  }

  > img {
    width: 300px;
    height: 180px;
    object-fit: cover;

    @media (max-width: ${breakPoint.desktop}) {
      width: 100%;
      object-fit: cover;
    }
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

  @media (max-width: ${breakPoint.desktop}) {
    font-size: 16px;
  }
`

export const Descricao = styled.p`
  color: ${cores.textoBotao};
  font-size: 14px;
  line-height: 22px;
  width: 304px;
  heigth: 88px;
  padding: 8px;
  margin-bottom: 8px;

  @media (max-width: ${breakPoint.desktop}) {
    font-size: 12px;
    line-height: 22px;
    width: 240px;
    padding: 4px;
  }

  @media (max-width: ${breakPoint.tablet}) {
    width: 300px;
  }
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

  @media (max-width: ${breakPoint.desktop}) {
    font-size: 12px;
    padding: 4px 8px;
  }
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

  max-width: 1024px;
  width: 100%;
  position: relative;

  ${ButtonContainer} {
    margin-top: 68px;
    margin-bottom: 40px;

    @media (max-width: ${breakPoint.tablet}) {
      margin-top: 10px;
    }

    @media (max-width: ${breakPoint.cel}) {
      width: 240px;
      margin-top: 10px;
      margin-left: 36px;
    }
  }
`

export const ModalItem = styled.div`
  display:flex;

  @media (max-width: ${breakPoint.cel}) {
    display: block;
    height: 400px;
  }

img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px;

    @media (max-width: ${breakPoint.tablet}) {
    width: 160px;
    }

    @media (max-width: ${breakPoint.cel}) {
    max-width: 220px;
    width: 100%;
    height: 100px;
    margin: 24px;
    }
  }

  h3 {
    color: ${cores.branca};
    margin-top: 32px;

    @media (max-width: ${breakPoint.cel}) {
      margin-top: 5px;
      font-size: 16px;
      text-align: center;
    }
  }

  p {
    color: ${cores.branca};
    width: 600px;
    line-height: 22px;
    font-size: 14px;
    margin: 12px 16px 16px 0;


    @media (max-width: ${breakPoint.tablet}) {
      width: 300px;
      font-size: 12px;
    }

    @media (max-width: ${breakPoint.cel}) {
      line-height: 16px;
      width: 100%;
      text-align: center;
      padding-left: 10px;
      margin: 12px 8px 8px 0;
    }
`
