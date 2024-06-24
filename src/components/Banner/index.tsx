import { ImagemBanner, Titulo } from './styles'
import ImagemHome from '../../assets/images/fundo.svg'

const BannerHome = () => (
  <>
    <ImagemBanner style={{ backgroundImage: `url(${ImagemHome})` }}>
      <div className="container">
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </div>
    </ImagemBanner>
  </>
)
export default BannerHome
