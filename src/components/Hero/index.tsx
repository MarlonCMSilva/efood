import { useParams } from 'react-router-dom'

import { useGetHeroQuery } from '../../services/api'

import { BannerHero } from './styles'
import Loader from '../Loader'

type RestaurantParams = {
  id: string
}

export type Props = {
  restaurantes: ProdutoNaHome
}

const Hero = () => {
  const { id } = useParams() as RestaurantParams
  const { data: hero } = useGetHeroQuery(id)

  // const [hero, setHero] = useState<ProdutoNaHome>()
  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setHero(res))
  // }, [id])

  if (!hero) {
    return <Loader />
  }

  return (
    <BannerHero style={{ backgroundImage: `url(${hero.capa})` }}>
      <div className="container">
        <p>{hero.tipo}</p>
        <h2>{hero.titulo}</h2>
      </div>
    </BannerHero>
  )
}
export default Hero
