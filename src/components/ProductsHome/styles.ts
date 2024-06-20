import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.section`
  border: 1px solid ${cores.rosa};
  position: relative;
  margin-bottom: 48px;

  ${ButtonLink} {
    text-decoration: none;
  }

  > img {
    width: 100%;
  }
`

export const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;

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
font weight: bold;
padding-right: 8px
`
export const NotaImagem = styled.img``

export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 30px;
  display: flex;
  padding-right: 8px;
  padding-left: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
