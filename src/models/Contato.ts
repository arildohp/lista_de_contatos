class Contato {
  nomeContato: string
  nome: string
  categoria: string
  id: number
  nContato: string
  email: string

  constructor(
    nomeContato: string,
    nContato: string,
    nome: string,
    categoria: string,
    id: number,
    email: string
  ) {
    this.nomeContato = nomeContato
    this.nContato = nContato
    this.nome = nome
    this.categoria = categoria
    this.id = id
    this.email = email
  }
}
export default Contato
