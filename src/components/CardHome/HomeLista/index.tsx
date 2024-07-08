import Button from '../../Button'
import estrela from '../../../assets/images/estrela.png'

import * as S from './styles'

type Props = {
  titulo: string
  avaliacao: number
  image: string
  tipo: string
  descricao: string
  id: number
  destacado: boolean
}

const HomeLista = ({
  descricao,
  image,
  tipo,
  titulo,
  avaliacao,
  destacado,
  id
}: Props) => (
  <>
    <S.Card to={`/restaurantes/${id}`}>
      <img src={image} alt={titulo} />
      <S.Infos>
        {destacado === true ? (
          <>
            <S.TagContainer>Destaque do Dia</S.TagContainer>
            <S.TagContainer>{tipo}</S.TagContainer>
          </>
        ) : (
          <S.TagContainer>{tipo}</S.TagContainer>
        )}
      </S.Infos>
      <S.ContainerTitulo>
        <S.Title>{titulo}</S.Title>
        <S.Nota>
          {avaliacao}
          <img src={estrela} alt="" />
        </S.Nota>
      </S.ContainerTitulo>
      <S.Descricao>{descricao}</S.Descricao>
      <Button
        type="link"
        to={`/restaurantes/${id}`}
        title="clique aqui para saber mais sobre o produto"
      >
        Saiba mais
      </Button>
    </S.Card>
  </>
)

export default HomeLista
