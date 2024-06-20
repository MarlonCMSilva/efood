import Button from '../components/Button'
import { Card, Descricao, Title } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Products = ({ description, image, title }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Descricao>{description}</Descricao>
    <Button type="button" to="/Home" title="Adicionar ao Carrinho">
      Adicionar ao Carrinho
    </Button>
  </Card>
)

export default Products
