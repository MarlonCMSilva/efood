import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHome: builder.query<ProdutoNaHome[], void>({
      query: () => '/restaurantes'
    }),
    getHero: builder.query<ProdutoNaHome, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    getMenu: builder.query<Cardapio[], string>({
      query: (id) => `/restaurantes/${id}`,
      transformResponse: (response: ProdutoNaHome) => response.cardapio
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'https://fake-api-tau.vercel.app/api/efood/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetHeroQuery,
  useGetHomeQuery,
  useGetMenuQuery,
  usePurchaseMutation
} = api
export default api
