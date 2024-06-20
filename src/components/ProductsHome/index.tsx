import Button from '../Button'
import Tag from '../Tag'
import { Card, Nota, Descricao, Title, Infos, ContainerTitulo } from './styles'

type Props = {
  title: string
  nota: string
  image: string
  infos: string[]
  description: string
  imageNota: string
}

const ProductsHome = ({
  description,
  image,
  infos,
  title,
  nota,
  imageNota
}: Props) => (
  <>
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <ContainerTitulo>
        <Title>{title}</Title>
        <Nota>
          {nota}
          <img src={imageNota} alt="" />
        </Nota>
      </ContainerTitulo>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to="/Perfil"
        title="clique aqui para saber mais sobre o produto"
      >
        Saiba mais
      </Button>
    </Card>
  </>
)

export default ProductsHome
