import SaibaMais from '../../models/About'

import comidaJaponesa from '../../assets/images/Japones.svg'
import comidaItaliana from '../../assets/images/italiana.svg'
import ProductList from '../../components/ProductList'
import BannerHome from '../../components/Banner/BannerHome'
import estrela from '../../assets/images/estrela.png'

const sobre: SaibaMais[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!.',
    title: 'Hioki Sushi',
    infos: ['destaque da Semana', 'Japonesa'],
    nota: '4.0',
    image: comidaJaponesa,
    imageNota: estrela
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: '4.6',
    image: comidaItaliana,
    imageNota: estrela
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: '4.6',
    image: comidaItaliana,
    imageNota: estrela
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: '4.6',
    image: comidaItaliana,
    imageNota: estrela
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: '4.6',
    image: comidaItaliana,
    imageNota: estrela
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: '4.6',
    image: comidaItaliana,
    imageNota: estrela
  }
]

const Home = () => (
  <>
    <BannerHome />
    <ProductList saiba={sobre} />
  </>
)

export default Home
