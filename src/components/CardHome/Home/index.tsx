import Loader from '../../Loader'
import ProductsHome from '../HomeLista'
import * as S from './styles'

export type Props = {
  restaurantes?: ProdutoNaHome[]
  isLoading: boolean
}

const CardHome = ({ restaurantes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurantes &&
            restaurantes.map((restaurantes) => (
              <li key={restaurantes.id}>
                <ProductsHome
                  id={restaurantes.id}
                  titulo={restaurantes.titulo}
                  avaliacao={restaurantes.avaliacao}
                  descricao={restaurantes.descricao}
                  image={restaurantes.capa}
                  tipo={restaurantes.tipo}
                  destacado={restaurantes.destacado}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default CardHome
