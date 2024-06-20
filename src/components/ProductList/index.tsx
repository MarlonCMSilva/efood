import ProductsHome from '../ProductsHome'
import { Container, List } from './styles'
import SaibaMais from '../../models/About'

export type Props = {
  saiba: SaibaMais[]
}

const ProductList = ({ saiba }: Props) => (
  <Container>
    <div className="container">
      <List>
        {saiba.map((saiba) => (
          <ProductsHome
            key={saiba.id}
            title={saiba.title}
            nota={saiba.nota}
            description={saiba.description}
            image={saiba.image}
            infos={saiba.infos}
            imageNota={saiba.imageNota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
