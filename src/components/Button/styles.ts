import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  max-width: 300px;
  background-color: ${cores.textoBotao};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  border: 1px solid ${cores.rosa};
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.textoBotao};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  display: inline-block;
  margin: 8px 20px;
  text-decoration: none;
`
