import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  max-width: 300px;
  background-color: ${colors.lightPink};
  color: ${colors.pink};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  border: 1px solid ${colors.pink};
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.lightPink};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  display: inline-block;
  margin: 8px 20px;
  text-decoration: none;
`
