import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: ' Valeria pereira',
      nContato: '35999947892',
      email: 'arildohp@gmail.com',
      categoria: 'familia'
    },
    {
      id: 2,
      nome: ' Kauan pereira',
      nContato: '35999947892',
      categoria: 'trabalho',
      email: 'kauan@gmail.com'
    },
    {
      id: 3,
      nome: ' Arlon solza',
      nContato: '35999578923',
      email: 'arlon@gmail.com',
      categoria: 'amigos'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
