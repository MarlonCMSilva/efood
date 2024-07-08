import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Header from '../../components/Header'
import CardCardapio from '../../components/CardCardapio/Cardapio'

import { useGetMenuQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: menu, isLoading: isLoadingPerfil } = useGetMenuQuery(id)

  // const [menu, setCardapio] = useState<Cardapio[]>([])
  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setCardapio(res?.cardapio))
  // }, [id])

  return (
    <>
      <Header />
      <Hero />
      <CardCardapio items={menu} isLoading={isLoadingPerfil} />
    </>
  )
}

export default Perfil
