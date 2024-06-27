import HomeLista from '../../components/CardHome/Home'
import BannerHome from '../../components/Banner'

import { useEffect, useState } from 'react'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface ProdutoNaHome {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<ProdutoNaHome[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <BannerHome />
      <HomeLista restaurantes={restaurantes} />
    </>
  )
}

export default Home
