import Products from '../CardapioLista'
import { Container, List } from './style'
import { Cardapio } from '../../../pages/Home'

export type Props = {
  items: Cardapio[]
}

const CardCardapio = ({ items }: Props) => (
  <Container>
    <div className="container">
      <List>
        {items.map((items) => (
          <li key={items.id}>
            <Products menu={items} />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default CardCardapio
