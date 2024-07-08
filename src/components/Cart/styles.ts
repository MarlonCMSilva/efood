import styled from 'styled-components'

import garbage from '../../assets/images/lixeira.png'

import { ButtonContainer } from '../Button/styles'
import { colors } from '../../styles'

type RowProps = {
  flexDirection?: string
}

type InputGroupProps = {
  maxWidth?: string
}

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
  color: ${colors.pink};
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

  .empty-text {
    font-size: 16px;
    line-height: 22px;
    color: ${colors.lightPink};
    text-align: center;
    margin-top: 20px;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.pink};
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
  background-color: ${colors.lightPink};
  max-width: 340px;
  width: 100%;
  color: ${colors.pink};
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
    background-image: url(${garbage});
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
  color: ${colors.lightPink};
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  padding-left: 8px;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  width: 100%;
`

export const InputGroup = styled.div<InputGroupProps>`
  font-size: 14px;
  font-weight: bold;
  align-items: flex-end;
  color: ${colors.white};

  max-width: ${(props) => props.maxWidth || 'auto'};
  width: 100%;

  .margin-left {
    margin-left: 34px;
  }

  label {
    margin-bottom: 8px;
    display: block;
  }

  input {
    margin-bottom: 8px;
    backgroun-color: ${colors.white};
    border: 1px solid ${colors.pink};
    width: 100%;
    height: 34px;

    &.error {
      border: 2px solid red;
    }
  }
`

export const Paragrafo = styled.p`
  font-size: 14px;
  line-weight: 22px;
  color: ${colors.white};
`
