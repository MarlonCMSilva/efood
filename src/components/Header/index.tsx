import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCarrinho } from './styles'

import logo from '../../assets/images/logo.svg'
import ImagemHeader from '../../assets/images/fundo.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar style={{ backgroundImage: `url(${ImagemHeader})` }}>
      <div className="container">
        <nav>
          <Links>
            <LinkItem to={'/'}>Restaurantes</LinkItem>
            <LinkItem to={'/'}>
              <img src={logo} alt="EFOOD" />
            </LinkItem>
            <LinkCarrinho onClick={openCart}>
              {items.length} Produto(s) no carrinho
            </LinkCarrinho>
          </Links>
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header
