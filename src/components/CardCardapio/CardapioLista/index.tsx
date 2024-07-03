import { useDispatch } from 'react-redux'
import Button from '../../Button'
import {
  ButtonContainer,
  Card,
  ContainerModal,
  Descricao,
  Modal,
  ModalItem,
  Title
} from './styles'
import { useState } from 'react'
import { open, add } from '../../../store/reducers/cart'
import { Cardapio } from '../../../pages/Home'

type Props = {
  menu: Cardapio
}

type ModalState = {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Products = ({ menu }: Props) => {
  const dispatch = useDispatch()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
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

  return (
    <>
      <Card>
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
          <Title>{menu.nome}</Title>
          <Descricao>{getDescricao(menu.descricao)}</Descricao>
          <ButtonContainer
            type="button"
            title="clique aqui para saber mais sobre o produto"
            onClick={() =>
              setModal({
                isVisible: true
              })
            }
          >
            Mais Detalhes
          </ButtonContainer>
        </div>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ContainerModal className="container">
          <ModalItem>
            <img src={menu.foto} alt="" />
            <div>
              <h3>{menu.nome}</h3>
              <p>{menu.descricao}</p>
              <p>Serve:{menu.porcao}</p>
              <ButtonContainer
                onClick={addToCart}
                type="button"
                title="Adicionar ao Carrinho"
              >
                Adicionar ao Carrinho {formataPreco(menu.preco)}
              </ButtonContainer>
            </div>
          </ModalItem>
        </ContainerModal>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Products
