import Button from '../Button'
import { Card, ContainerModal, Descricao, Modal, Title } from './styles'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
}

type ModalState = {
  isVisible: boolean
}

const Products = ({ description, image, title }: Props) => {
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
          src={image}
          alt={title}
          onClick={() =>
            setModal({
              isVisible: true
            })
          }
        />
        <Title>{title}</Title>
        <Descricao>{description}</Descricao>
        <Button
          type="button"
          title="Adicionar ao Carrinho"
          onClick={() =>
            setModal({
              isVisible: true
            })
          }
        >
          Adicionar ao Carrinho
        </Button>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ContainerModal className="container">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <h3>Pizza Marquerida</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <Button type="button" to="/Home" title="Adicionar ao Carrinho">
              Adicionar ao Carrinho
            </Button>
          </div>
        </ContainerModal>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Products
