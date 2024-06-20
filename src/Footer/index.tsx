import {
  Container,
  Description,
  Link,
  Links,
  SectionDescription,
  SectionLogo,
  SectionSocial
} from './styles'
import FooterImagem from '../assets/images/footer.png'
import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/facebook.png'
import x from '../assets/images/x.png'
import instagram from '../assets/images/instagram.png'

const Footer = () => (
  <Container style={{ background: `url(${FooterImagem})` }}>
    <div className="container">
      <SectionLogo>
        <img src={logo} alt="" />
      </SectionLogo>
      <SectionSocial>
        <Links>
          <Link>
            <img src={facebook} alt="" />
          </Link>
          <Link>
            <img src={x} alt="" />
          </Link>
          <Link>
            <img src={instagram} alt="" />
          </Link>
        </Links>
      </SectionSocial>
      <SectionDescription>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Description>
      </SectionDescription>
    </div>
  </Container>
)

export default Footer
