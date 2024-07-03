import styled from 'styled-components'
import { breakPoint, cores } from '../styles'

export const Container = styled.footer`
  width: 100%;
  height: 260px;
  padding: 32px 0;

  @media (max-width: ${breakPoint.desktop}) {
    display: flex;
    max-width: 768px;
  }
`

export const SectionLogo = styled.div`
  padding-top: 40px;
  display: flex;
  margin-left: 440px;
  margin-bottom: 32px;

  @media (max-width: ${breakPoint.desktop}) {
    margin-left: 220px;
  }

  @media (max-width: ${breakPoint.cel}) {
    margin-left: 120px;
  }
`

export const SectionSocial = styled.section`
  margin-left: 460px;
  margin-right: 460px;
  padding-right: 8px;

  @media (max-width: ${breakPoint.desktop}) {
    margin-left: 220px;
  }

  @media (max-width: ${breakPoint.cel}) {
    margin-left: 120px;
  }
`

export const Links = styled.ul`
  display: flex;
`
export const Link = styled.li`
  align-items: center;
  margin-left: 8px;
`

export const SectionDescription = styled.section`
  margin-top: 40px;
`

export const Description = styled.p`
  color: ${cores.rosa};
  text-align: center;
  line-height: 12px;
  font-size: 10px;
`
