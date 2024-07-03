import styled from 'styled-components'
import { breakPoint, cores } from '../../../styles'
import { ButtonLink } from '../../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  border: 1px solid ${cores.rosa};
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: block;

  @media (max-width: ${breakPoint.desktop}) {
    width: 100%;
  }

  ${ButtonLink} {
    text-decoration: none;

    @media (max-width: ${breakPoint.desktop}) {
      justify-content: flex-end;
    }
  }

  > img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;

    @media (max-width: ${breakPoint.desktop}) {
      width: 100%;
    }
  }
`

export const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  @media (max-width: ${breakPoint.desktop}) {
    margin-top: 4px;
    text-align: center;
  }

  img {
    height: 20px;
    padding-left: 8px;

    @media (max-width: ${breakPoint.desktop}) {
      height: 12px;
      padding-left: 4px;
    }
  }
`

export const Title = styled.h3`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
  padding-left: 8px;

  @media (max-width: ${breakPoint.desktop}) {
    font-size: 12px;
  }
`

export const Nota = styled.p`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
  padding-right: 8px;

  @media (max-width: ${breakPoint.desktop}) {
    font-size: 12px;
  }
`
export const NotaImagem = styled.img``

export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
  line-height: 22px;
  width: 420px
  height: 88px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  padding-right: 8px;
  padding-left: 8px;


  @media (max-width: ${breakPoint.desktop}) {
    font-size: 12px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TagContainer = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.textoBotao};
  display: inline-block;
  margin-right: 16px;
  margin-top: 10px;
  width: 60px
  font-size: 12px;
  font-weight: bold;
  padding: 8px 16px;

  @media (max-width: ${breakPoint.desktop}) {
  display: inline-block;
  margin-right: 8px;
  margin-top: 4px;
  width: 32px
  font-size: 6px;
  font-weight: bold;
  padding: 8px 8px;
  }
`
