import bannerHome from '../../assets/images/fundo.svg'

import * as S from './styles'

const BannerHome = () => (
  <>
    <S.BannerImage style={{ backgroundImage: `url(${bannerHome})` }}>
      <div className="container">
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </div>
    </S.BannerImage>
  </>
)
export default BannerHome
