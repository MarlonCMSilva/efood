import styled from 'styled-components'
import { cores } from '../../../styles'
import { ButtonLink } from '../../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  border: 1px solid ${cores.rosa};
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: block;

  ${ButtonLink} {
    text-decoration: none;
  }

  > img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
`

export const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  img {
    height: 20px;
    padding-left: 8px;
  }
`

export const Title = styled.h3`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  padding-left: 8px;
`

export const Nota = styled.p`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
  padding-right: 8px;
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
`
