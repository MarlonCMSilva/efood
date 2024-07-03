import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.png'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  color: ${cores.rosa};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  max-width: 360px;
  width: 100%;

  ul {
    margin: 32px 8px 16px 8px;
  }

  ${ButtonContainer} {
    font-size: 14px;
    font-weight: bold;
    margin-right: 8px;
    margin-left: 8px;
    max-width: 340px;
    width: 100%;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.textoBotao};
  max-width: 340px;
  width: 100%;
  color: ${cores.rosa};
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    padding-top: 8px;
    padding-bottom: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 16px;
    margin-top: 10px;
  }
`

export const Price = styled.p`
  color: ${cores.textoBotao};
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  padding-left: 8px;
  margin-top: 40px;
  margin-bottom: 16px;
`
