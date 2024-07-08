import styled from 'styled-components'
import { breakPoint } from '../../../styles'

export const Container = styled.section`
  padding: 32px 0;

  .container {
    @media (max-width: ${breakPoint.tablet}) {
      display: block;
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;

  @media (max-width: ${breakPoint.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: ${breakPoint.cel}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
