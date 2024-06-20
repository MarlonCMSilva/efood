import { ImagemBanner, Pratos, Titulo } from './styles'
import BannerItaliana from '../../../assets/images/italiana.svg'

const BannerPerfil = () => (
  <>
    <ImagemBanner style={{ backgroundImage: `url(${BannerItaliana})` }}>
      <div className="container">
        <Pratos>Italiana</Pratos>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </ImagemBanner>
  </>
)
export default BannerPerfil
