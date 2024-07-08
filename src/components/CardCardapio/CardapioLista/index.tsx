import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { open, add } from '../../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import Loader from '../../Loader'

import * as S from './styles'

type Props = {
  menu: Cardapio
  isLoading: boolean
}

type ModalState = {
  isVisible: boolean
}

const Products = ({ menu, isLoading }: Props) => {
  const dispatch = useDispatch()

  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.Card>
        <img
          src={menu.foto}
          alt={menu.nome}
          onClick={() =>
            setModal({
              isVisible: true
            })
          }
        />
        <div>
          <S.Title>{menu.nome}</S.Title>
          <S.Description>{getDescription(menu.descricao)}</S.Description>
          <S.ButtonContainer
            type="button"
            title="clique aqui para saber mais sobre o produto"
            onClick={() =>
              setModal({
                isVisible: true
              })
            }
          >
            Mais Detalhes
          </S.ButtonContainer>
        </div>
      </S.Card>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ContainerModal className="container">
          <S.ModalItem>
            <img src={menu.foto} alt="" />
            <div>
              <h3>{menu.nome}</h3>
              <p>{menu.descricao}</p>
              <p>Serve:{menu.porcao}</p>
              <S.ButtonContainer
                onClick={addToCart}
                type="button"
                title="Adicionar ao Carrinho"
              >
                Adicionar ao Carrinho {parseToBrl(menu.preco)}
              </S.ButtonContainer>
            </div>
          </S.ModalItem>
        </S.ContainerModal>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  )
}

export default Products
