import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import CardCardapio from '../../components/CardCardapio/Cardapio'
import Header from '../../components/Header'
import { Cardapio, ProdutoNaHome } from '../Home'

import { useGetMenuQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: menu } = useGetMenuQuery(id!)

  // const [menu, setCardapio] = useState<Cardapio[]>([])
  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setCardapio(res?.cardapio))
  // }, [id])

  if (menu) {
    return (
      <>
        <Header />
        <Hero />
        <CardCardapio items={menu} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Perfil
