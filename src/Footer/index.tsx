import FooterImagem from '../assets/images/footer.png'
import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/facebook.png'
import x from '../assets/images/x.png'
import instagram from '../assets/images/instagram.png'

import * as S from './styles'

const Footer = () => (
  <S.Container style={{ background: `url(${FooterImagem})` }}>
    <div className="container">
      <S.SectionLogo>
        <img src={logo} alt="" />
      </S.SectionLogo>
      <S.SectionSocial>
        <S.Links>
          <S.Link>
            <img src={facebook} alt="" />
          </S.Link>
          <S.Link>
            <img src={x} alt="" />
          </S.Link>
          <S.Link>
            <img src={instagram} alt="" />
          </S.Link>
        </S.Links>
      </S.SectionSocial>
      <S.SectionDescription>
        <S.Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.Description>
      </S.SectionDescription>
    </div>
  </S.Container>
)

export default Footer
