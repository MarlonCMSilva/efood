import { ProdutoNaHome } from '../../../pages/Home'
import ProductsHome from '../HomeLista'
import { Container, List } from './styles'

export type Props = {
  restaurantes: ProdutoNaHome[]
}

const CardHome = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurantes) => (
          <li key={restaurantes.id}>
            <ProductsHome
              id={restaurantes.id}
              titulo={restaurantes.titulo}
              avaliacao={restaurantes.avaliacao}
              descricao={restaurantes.descricao}
              image={restaurantes.capa}
              tipo={restaurantes.tipo}
              destacado={restaurantes.destacado}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default CardHome
