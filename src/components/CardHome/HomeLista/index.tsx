import Button from '../../Button'
import estrela from '../../../assets/images/estrela.png'

import {
  Card,
  Nota,
  Descricao,
  Title,
  Infos,
  ContainerTitulo,
  TagContainer
} from './styles'

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
    <Card to={`/restaurantes/${id}`}>
      <img src={image} alt={titulo} />
      <Infos>
        {destacado === true ? (
          <>
            <TagContainer>Destaque do Dia</TagContainer>
            <TagContainer>{tipo}</TagContainer>
          </>
        ) : (
          <TagContainer>{tipo}</TagContainer>
        )}
      </Infos>
      <ContainerTitulo>
        <Title>{titulo}</Title>
        <Nota>
          {avaliacao}
          <img src={estrela} alt="" />
        </Nota>
      </ContainerTitulo>
      <Descricao>{descricao}</Descricao>
      <Button
        type="link"
        to={`/restaurantes/${id}`}
        title="clique aqui para saber mais sobre o produto"
      >
        Saiba mais
      </Button>
    </Card>
  </>
)

export default HomeLista
