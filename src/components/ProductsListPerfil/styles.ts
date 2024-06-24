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
