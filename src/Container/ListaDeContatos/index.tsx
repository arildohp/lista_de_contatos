import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  return (
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
}

export default ListaDeContatos
