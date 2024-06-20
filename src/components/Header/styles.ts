import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  display: flex;

  img {
    padding-top: 60px;
    display: flex;
    margin-left: 440px;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
`
export const LinkItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
`
