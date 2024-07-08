import styled from 'styled-components'
import { breakPoint, colors } from '../styles'

export const Container = styled.footer`
  width: 100%;
  height: 260px;
  padding: 32px 0;

  @media (min-width: ${breakPoint.tablet}) {
  }
`

export const SectionLogo = styled.div`
  display: flex;
  padding-top: 40px;
  margin-left: 440px;
  margin-bottom: 32px;

  @media (max-width: ${breakPoint.desktop}) {
    margin-left: 300px;
  }

  @media (max-width: ${breakPoint.tablet}) {
    margin-left: 180px;
  }
`

export const SectionSocial = styled.section`
  margin-left: 460px;
  margin-right: 460px;
  padding-right: 8px;

  @media (min-width: ${breakPoint.desktop}) {
    margin-left: 300px;
  }

  @media (max-width: ${breakPoint.tablet}) {
    margin-left: 180px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 142px;

  @media (max-width: ${breakPoint.tablet}) {
    margin-left: 12px;
  }
`
export const Link = styled.li`
  align-items: center;
  margin-left: 8px;
`

export const SectionDescription = styled.section`
  margin-top: 40px;
`

export const Description = styled.p`
  color: ${colors.pink};
  text-align: center;
  line-height: 12px;
  font-size: 10px;
`
