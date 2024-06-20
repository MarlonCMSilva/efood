import { HeaderBar, Links, LinkItem } from './styles'

import logo from '../../assets/images/logo.svg'
import ImagemHeader from '../../assets/images/fundo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${ImagemHeader})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <nav>
        <Links>
          <LinkItem>Restaurantes</LinkItem>
          <LinkItem>0 Produtos no carrinho</LinkItem>
        </Links>
      </nav>
    </div>
  </HeaderBar>
)

export default Header
