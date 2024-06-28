import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}
})

export type RootReucer = ReturnType<typeof store.getState>
