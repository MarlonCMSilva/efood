import { useEffect, useState } from 'react'
import { BannerHero } from './styles'
import BannerItaliana from '../../assets/images/BannerItaliana.png'
import { ProdutoNaHome } from '../../pages/Home'
import { useParams } from 'react-router-dom'

export type Props = {
  restaurantes: ProdutoNaHome
}

const Hero = () => {
  const { id } = useParams()

  const [hero, setHero] = useState<ProdutoNaHome>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setHero(res))
  }, [id])

  if (!hero) {
    return <h3>Carregando...</h3>
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
