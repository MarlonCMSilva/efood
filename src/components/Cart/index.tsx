import { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import Button from '../Button'
import Card from '../Card'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from '../utils'

import * as S from './styles'

const Cart = () => {
  const dispacth = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [carrinho, setCarrinho] = useState(true)
  const [entrega, setEntrega] = useState(true)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const closeCart = () => {
    dispacth(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispacth(remove(id))
  }

  const form = useFormik({
    initialValues: {
      receiveName: '',
      address: '',
      city: '',
      codeAddress: '',
      numberAddress: '',
      addressComplement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiveName: Yup.string()
        .min(5, 'O nome precisa ter mais que 5 caracteres')
        .required('O Campo é obrigatorio'),
      address: Yup.string()
        .min(5, 'O nome precisa ter mais que 5 caracteres')
        .required('O Campo é obrigatorio'),
      city: Yup.string()
        .min(5, 'O nome precisa ter mais que 5 caracteres')
        .required('O Campo é obrigatorio'),
      codeAddress: Yup.string()
        .min(9, 'O CEP precisa ter mais que 8 caracteres')
        .max(9, 'O CEP precisa ter no maximo 8 caracteres')
        .required('O Campo é obrigatorio'),
      numberAddress: Yup.number()
        .min(2, 'O Campo precisa ter mais que 2 caracteres')
        .max(111111, 'O Campo requer uma informação pequena')
        .required('O Campo é obrigatorio'),

      addressComplement: Yup.string()
        .min(5, 'O Campo precisa ter mais que 5 caracteres')
        .max(30, 'O Campo é somente pra complemento'),

      cardName: Yup.string().when((values, schema) =>
        schema.required('O Campo é obrigátorio')
      ),
      cardNumber: Yup.string().when((values, schema) =>
        schema.required('O Campo é obrigátorio')
      ),
      cardCode: Yup.number().when((values, schema) =>
        schema.required('O Campo é obrigátorio')
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        schema.required('O Campo é obrigátorio')
      ),
      expiresYear: Yup.string().when((values, schema) =>
        schema.required('O Campo é obrigátorio')
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiveName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.codeAddress,
            number: Number(values.numberAddress),
            complement: values.addressComplement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  // const goToCheckout = () => {
  //   if (items.length >= 1) {
  //     setCarrinho(false)
  //     setEntrega(true)
  //   } else items.length === 0
  //   setCarrinho(true)
  // }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.SideBar>
          {isSuccess && data ? (
            <>
              <Card title={`Pedido realizado - ${data.orderId} `}>
                <S.Paragrafo>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                  <br />
                  <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                  <br />
                  <br />
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                  <br />
                  <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </S.Paragrafo>
              </Card>
              <Button
                type="submit"
                title="clique aqui para concluir a compra"
                onClick={closeCart}
              >
                Concluir
              </Button>
            </>
          ) : (
            <>
              <form onSubmit={form.handleSubmit}>
                {carrinho ? (
                  <>
                    {items.length > 0 ? (
                      <>
                        <ul>
                          {items.map((item) => (
                            <S.CartItem key={item.id}>
                              <img src={item.foto} alt="" />
                              <div>
                                <h3>{item.nome}</h3>
                                <p>{parseToBrl(item.preco)}</p>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  type="button"
                                />
                              </div>
                            </S.CartItem>
                          ))}
                        </ul>
                        <S.Price>
                          Valor Total <span>{parseToBrl(getTotalPrice())}</span>{' '}
                        </S.Price>
                        <Button
                          type="button"
                          title="clique aqui para continuar a compra"
                          onClick={() => {
                            if (items.length >= 1) {
                              return setCarrinho(false)
                            }
                            return setEntrega(true)
                          }}
                        >
                          Continuar com a entrega
                        </Button>
                      </>
                    ) : (
                      <p className="empty-text">
                        O carrinho esta vazio adicione um item para continuar a
                        compra
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    {entrega ? (
                      <>
                        <Card title={'Entrega'}>
                          <>
                            <S.Row flexDirection="column">
                              <S.InputGroup>
                                <label htmlFor="receiveName">
                                  Quem irá receber
                                </label>
                                <input
                                  id="receiveName"
                                  type="text"
                                  value={form.values.receiveName}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('receiveName')
                                      ? 'error'
                                      : ''
                                  }
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="address">Endereço</label>
                                <input
                                  id="address"
                                  type="text"
                                  value={form.values.address}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('address') ? 'error' : ''
                                  }
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="city">Cidade</label>
                                <input
                                  id="city"
                                  type="text"
                                  value={form.values.city}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('city') ? 'error' : ''
                                  }
                                />
                              </S.InputGroup>
                            </S.Row>
                            <S.Row flexDirection="row">
                              <S.InputGroup maxWidth="150px">
                                <label htmlFor="codeAddress">CEP</label>
                                <InputMask
                                  id="codeAddress"
                                  type="text"
                                  value={form.values.codeAddress}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('codeAddress')
                                      ? 'error'
                                      : ''
                                  }
                                  mask="99999-999"
                                />
                              </S.InputGroup>
                              <S.InputGroup maxWidth="150px">
                                <label
                                  className="margin-left"
                                  htmlFor="numberAddress"
                                >
                                  Numero
                                </label>
                                <input
                                  id="numberAddress"
                                  type="text"
                                  value={form.values.numberAddress}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={`margin-left ${
                                    checkInputHasError('numberAddress')
                                      ? 'error'
                                      : ''
                                  }`}
                                />
                              </S.InputGroup>
                            </S.Row>
                            <S.Row flexDirection="column">
                              <S.InputGroup>
                                <label htmlFor="addressComplement">
                                  Complemento (opcional)
                                </label>
                                <input
                                  id="addressComplement"
                                  type="text"
                                  value={form.values.addressComplement}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('addressComplement')
                                      ? 'error'
                                      : ''
                                  }
                                />
                              </S.InputGroup>
                            </S.Row>
                          </>
                        </Card>
                        <Button
                          type="button"
                          title="clique aqui para Continuar com a Compra"
                          onClick={() => {
                            setEntrega(false)
                          }}
                        >
                          Continuar com a Compra
                        </Button>
                        <Button
                          type="button"
                          title="clique aqui para Voltar ao Carrinho"
                          onClick={() => {
                            setCarrinho(true)
                          }}
                        >
                          Voltar ao Carrinho
                        </Button>
                      </>
                    ) : (
                      <>
                        <Card title={'Pagamento - Valor a pagar'}>
                          <>
                            <S.Row flexDirection="column">
                              <S.InputGroup maxWidth="344px">
                                <label htmlFor="cardName">Nome no Cartão</label>
                                <input
                                  id="cardName"
                                  type="text"
                                  value={form.values.cardName}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('cardName')
                                      ? 'error'
                                      : ''
                                  }
                                />
                              </S.InputGroup>
                            </S.Row>
                            <S.Row flexDirection="row">
                              <S.InputGroup maxWidth="224px">
                                <label htmlFor="cardNumber">
                                  Numero no cartão
                                </label>
                                <InputMask
                                  id="cardNumber"
                                  type="text"
                                  value={form.values.cardNumber}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('cardNumber')
                                      ? 'error'
                                      : ''
                                  }
                                  mask="9999 9999 9999 9999"
                                />
                              </S.InputGroup>
                              <S.InputGroup maxWidth="80px">
                                <label
                                  htmlFor="cardCode"
                                  className="margin-left"
                                >
                                  CVV
                                </label>
                                <InputMask
                                  id="cardCode"
                                  type="text"
                                  value={form.values.cardCode}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={`margin-left ${
                                    checkInputHasError('cardCode')
                                      ? 'error'
                                      : ''
                                  }`}
                                  mask="999"
                                />
                              </S.InputGroup>
                            </S.Row>
                            <S.Row flexDirection="row">
                              <S.InputGroup maxWidth="155px">
                                <label htmlFor="expiresMonth">
                                  Mês do vencimento
                                </label>
                                <InputMask
                                  id="expiresMonth"
                                  type="text"
                                  value={form.values.expiresMonth}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('expiresMonth')
                                      ? 'error'
                                      : ''
                                  }
                                  mask="99"
                                />
                              </S.InputGroup>
                              <S.InputGroup maxWidth="155px">
                                <label
                                  htmlFor="expiresYear"
                                  className="margin-left"
                                >
                                  Ano do vencimento
                                </label>
                                <InputMask
                                  id="expiresYear"
                                  type="text"
                                  value={form.values.expiresYear}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={`margin-left ${
                                    checkInputHasError('expiresYear')
                                      ? 'error'
                                      : ''
                                  }`}
                                  mask="99"
                                />
                              </S.InputGroup>
                            </S.Row>
                          </>
                        </Card>
                        <Button
                          type="submit"
                          title="clique aqui para finalizar"
                          onClick={() => {
                            form.handleSubmit()
                          }}
                          disabled={isLoading}
                        >
                          {isLoading
                            ? 'Finalizando Pagamento....'
                            : 'Finalizar Pagamento'}
                        </Button>
                        <Button
                          type="button"
                          title="clique aqui para voltar a edição do endereço"
                          onClick={() => setEntrega(true)}
                        >
                          Voltar a edição de endereço
                        </Button>
                      </>
                    )}
                  </>
                )}
              </form>
            </>
          )}
        </S.SideBar>
      </S.CartContainer>
    </>
  )
}

export default Cart
