import { BannerHero } from './styles'
import BannerItaliana from '../../assets/images/BannerItaliana.png'

const Hero = () => (
  <>
    <BannerHero style={{ backgroundImage: `url(${BannerItaliana})` }}>
      <div className="container">
        <p>Italiana</p>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </BannerHero>
  </>
)
export default Hero
