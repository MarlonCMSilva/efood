import Products from '../Products'
import { Container, List } from './style'
import Carrinho from '../models/Carrinho'

export type Props = {
  carrinho: Carrinho[]
}

const ProductPerfil = ({ carrinho }: Props) => (
  <Container>
    <div className="container">
      <List>
        {carrinho.map((carrinho) => (
          <Products
            key={carrinho.id}
            description={carrinho.description}
            image={carrinho.image}
            title={carrinho.titulo}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductPerfil
