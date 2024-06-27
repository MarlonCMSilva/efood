import Products from '../CardapioLista'
import { Container, List } from './style'
import { Cardapio } from '../../../pages/Home'

type Props = {
  items: Cardapio[]
}

const CardCardapio = ({ items }: Props) => (
  <Container>
    <div className="container">
      <List>
        {items.map((s) => (
          <li key={s.id}>
            <Products
              id={s.id}
              descricao={s.descricao}
              foto={s.foto}
              nome={s.nome}
              preco={s.preco}
              porcao={s.porcao}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default CardCardapio
