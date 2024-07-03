import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, ProdutoNaHome } from '../pages/Home'

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
    })
  })
})

export const { useGetHeroQuery, useGetHomeQuery, useGetMenuQuery } = api
export default api
