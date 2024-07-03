import { CartContainer, CartItem, Overlay, Price, SideBar } from './styles'
import pizza from '../../assets/images/pizza.png'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../CardCardapio/CardapioLista'

const Cart = () => {
  const dispacth = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispacth(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorTotal) => {
      return (acumulador += valorTotal.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispacth(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
                <button onClick={() => removeItem(item.id)} type="button" />
              </div>
            </CartItem>
          ))}
        </ul>
        <Price>
          Valor Total <span>{formataPreco(getTotalPrice())}</span>{' '}
        </Price>
        <Button type={'button'} title={'clique aqui para contineuar a compra'}>
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
