import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'
import ImagemHeader from '../../assets/images/fundo.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar style={{ backgroundImage: `url(${ImagemHeader})` }}>
      <S.HeaderRow className="container">
        <S.imageIcon>
          <img src={logo} alt="EFOOD" />
        </S.imageIcon>
        <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </S.Hamburguer>

        <nav>
          <S.Links>
            <S.LinkItem to={'/'}>Restaurantes</S.LinkItem>
            <S.LinkItem to={'/'}>
              <img src={logo} alt="EFOOD" />
            </S.LinkItem>
            <S.LinkCarrinho onClick={openCart}>
              {items.length} Produto(s) no carrinho
            </S.LinkCarrinho>
          </S.Links>
        </nav>
      </S.HeaderRow>
      <S.HeaderRow className="container">
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem to={'/'}>Restaurantes</S.LinkItem>
          </S.Links>
          <S.LinkCarrinho onClick={openCart}>{items.length}</S.LinkCarrinho>
        </S.NavMobile>
      </S.HeaderRow>
    </S.HeaderBar>
  )
}

export default Header
