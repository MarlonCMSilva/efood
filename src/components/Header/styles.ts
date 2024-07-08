import styled from 'styled-components'
import { breakPoint, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Links = styled.ul`
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakPoint.cel}) {
    margin-top: 10px;
    align-items: center;
    display: flex;
  }
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.pink};
`

export const HeaderBar = styled.header`
  flex-direction: column;
  width: 100%;
  height: 186px;
  display: flex;

  img {
    display: flex;
  }

  nav {
    align-item: center;

    @media (max-width: ${breakPoint.cel}) {
      display: none;
    }
  }

  @media (max-width: ${breakPoint.cel}) {
    height: 120px;
  }
`
export const HeaderRow = styled.div`
  flex-direction: column;
`

export const Hamburguer = styled.div`
  display: none;
  width: 32px;
  margin-top: 20px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.pink};
    margin-bottom: 4px;
  }

  @media (max-width: ${breakPoint.cel}) {
    display: block;
  }
`
export const imageIcon = styled.span`
  display: none;

  @media (max-width: ${breakPoint.cel}) {
    height: 32px;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const LinkCarrinho = styled.li`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.pink};
`
