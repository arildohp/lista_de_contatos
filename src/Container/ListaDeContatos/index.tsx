import Contato from '../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    nome: 'Arildo horacio pereira',
    categoria: 'familia'
  },
  {
    nome: 'Cristiane aparecida lemes',
    categoria: 'amigos'
  },
  {
    nome: 'Roney Silva',
    categoria: 'trabalho'
  },
  {
    nome: 'Ana maria',
    categoria: 'familia'
  }
]

const ListaDeContatos = () => (
  <Container>
    <p>Lista de contatos</p>
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato categoria={c.categoria} nome={c.nome} />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos
