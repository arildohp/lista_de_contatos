class Contato {
  contato: string
  nome: string
  categoria: string
  id: number
  nContato: number
  email: string

  constructor(
    contato: string,
    nContato: number,
    nome: string,
    categoria: string,
    id: number,
    email: string
  ) {
    this.contato = contato
    this.nContato = nContato
    this.nome = nome
    this.categoria = categoria
    this.id = id
    this.email = email
  }
}
export default Contato
