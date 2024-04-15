import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      contato: 'valeria pereira',
      nome: ' Valeria pereira',
      categoria: 'familia'
    },
    {
      id: 2,
      contato: 'kauan pereira',
      nome: ' Kauan pereira',
      categoria: 'trabalho'
    },
    {
      id: 3,
      contato: 'arlon solza',
      nome: ' Arlon solza',
      categoria: 'amigos'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
