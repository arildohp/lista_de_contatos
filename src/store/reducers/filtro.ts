import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  criterio: 'familia' | 'amigos' | 'trabalho' | 'todos'
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}
const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
    }
  }
})

export const { alteraTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
