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
          <li key={c.nomeContato}>
            <Contato
              id={c.id}
              nomeContato={c.nomeContato}
              nContato={c.nContato}
              categoria={c.categoria}
              nome={c.nome}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
