import styled from 'styled-components'
import { breakPoint, colors } from '../../styles'

export const BannerHero = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  margin-bottom: 20px;
  color: ${colors.white};

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: ${breakPoint.desktop}) {
    height: 200px;
  }

  @media (max-width: ${breakPoint.tablet}) {
    width: 768px;
    height: 160px;
  }

  @media (max-width: ${breakPoint.cel}) {
    width: 425px;
    height: 200px;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;

    @media (max-width: ${breakPoint.tablet}) {
      font-size: 20px;
    }
  }

  p {
    font-size: 32px;
    font-weight: 100;

    @media (max-width: ${breakPoint.tablet}) {
      font-size: 20px;
    }
  }
`
