import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  display: flex;

  img {
    display: flex;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
  align-items: center;
`
export const LinkItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
`
