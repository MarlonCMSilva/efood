import styled from 'styled-components'
import { breakPoint } from '../../../styles'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 120px;

  @media (max-width: ${breakPoint.tablet}) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`
