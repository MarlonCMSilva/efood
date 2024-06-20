import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem } from './styles'

import logo from '../../assets/images/logo.svg'
import ImagemHeader from '../../assets/images/fundo.svg'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${ImagemHeader})` }}>
    <div className="container">
      <nav>
        <Links>
          <LinkItem>Restaurantes</LinkItem>
          <LinkItem>
            <Link to="/">
              <img src={logo} alt="EFOOD" />
            </Link>
          </LinkItem>
          <LinkItem>0 Produtos no carrinho</LinkItem>
        </Links>
      </nav>
    </div>
  </HeaderBar>
)

export default Header
