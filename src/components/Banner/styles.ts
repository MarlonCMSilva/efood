import styled from 'styled-components'
import { breakPoint, colors } from '../../styles'

export const BannerImage = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 80px;

  @media (max-width: ${breakPoint.desktop}) {
    width: 100%;
    height: 280px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.pink};
  text-align: center;
  max-width: 540px;
  padding-top: 120px;
  padding-bottom: 40px;
  margin-left: 240px;

  @media (max-width: ${breakPoint.desktop}) {
    font-size: 24px;
    margin-left: 24px;
  }
`
