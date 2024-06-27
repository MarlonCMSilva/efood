import Button from '../../Button'
import {
  ButtonContainer,
  Card,
  ContainerModal,
  Descricao,
  Modal,
  Title
} from './styles'
import { useState } from 'react'

type Props = {
  preco: number
  foto: string
  id: number
  nome: string
  descricao: string
  porcao: string
}

type ModalState = {
  isVisible: boolean
}

const Products = ({ foto, descricao, id, nome, porcao, preco }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <Card>
        <img
          src={foto}
          alt={nome}
          onClick={() =>
            setModal({
              isVisible: true
            })
          }
        />
        <div>
          <Title>{nome}</Title>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <ButtonContainer
            type="button"
            title="Adicionar ao Carrinho"
            onClick={() =>
              setModal({
                isVisible: true
              })
            }
          >
            Adicionar ao Carrinho
          </ButtonContainer>
        </div>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ContainerModal className="container">
          <div>
            <img src={foto} alt="" />
          </div>
          <div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>Serve:{porcao}</p>
            <ButtonContainer type="button" title="Adicionar ao Carrinho">
              Adicionar ao Carrinho {formataPreco(preco)}
            </ButtonContainer>
          </div>
        </ContainerModal>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Products
