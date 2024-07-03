import styled from 'styled-components'
import { breakPoint, cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  display: flex;

  @media (max-width: ${breakPoint.desktop}) {
    height: 120px;
  }

  img {
    display: flex;

    @media (max-width: ${breakPoint.desktop}) {
      width: 80px;
    }

    @media (max-width: ${breakPoint.cel}) {
      width: 60px;
    }
  }
  nav {
    align-item: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakPoint.cel}) {
    justify-content: space-between;
  }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};

  @media (max-width: ${breakPoint.cel}) {
    font-size: 12px;
  }
`
export const LinkCarrinho = styled.li`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};

  @media (max-width: ${breakPoint.cel}) {
    font-size: 12px;
  }
`
