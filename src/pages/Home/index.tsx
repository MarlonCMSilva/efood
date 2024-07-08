import HomeLista from '../../components/CardHome/Home'
import BannerHome from '../../components/Banner'

import { useGetHomeQuery } from '../../services/api'

const Home = () => {
  const { data: home, isLoading } = useGetHomeQuery()

  // const [restaurantes, setRestaurantes] = useState<ProdutoNaHome[]>([])
  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res) => setRestaurantes(res))
  // }, [])

  return (
    <>
      <BannerHome />
      <HomeLista restaurantes={home} isLoading={isLoading} />
    </>
  )
}

export default Home
