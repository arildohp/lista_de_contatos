import * as enums from '../../src/utils/enums/Contato'

class Contatos {
  nome: string
  categoria: enums.Categoria
  id: number
  nContato: string
  email: string

  constructor(
    nContato: string,
    nome: string,
    categoria: enums.Categoria,
    id: number,
    email: string
  ) {
    this.nContato = nContato
    this.nome = nome
    this.categoria = categoria
    this.id = id
    this.email = email
  }
}
export default Contatos
