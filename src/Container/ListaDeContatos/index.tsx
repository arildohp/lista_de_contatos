import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <p>Lista de contatos</p>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato id={c.id} categoria={c.categoria} nome={c.nome} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
