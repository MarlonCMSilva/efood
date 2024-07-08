import Products from '../CardapioLista'
import { Container, List } from './style'

import Loader from '../../Loader'

export type Props = {
  items?: Cardapio[]
  isLoading: boolean
}

const CardCardapio = ({ items, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="container">
        <List>
          {items &&
            items.map((items) => (
              <li key={items.id}>
                <Products menu={items} isLoading={isLoading} />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default CardCardapio
