import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { criterio } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    if (criterio !== undefined) {
      return itens.filter(
        (item) =>
          item.categoria.toLowerCase().search(criterio.toLowerCase()) >= 0
      )
    } else {
      return itens
    }
  }
  return (
    <MainContainer>
      <Titulo as="p">Lista de contatos &quot;{criterio}&ldquo;</Titulo>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nContato={c.nContato}
              categoria={c.categoria}
              nome={c.nome}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
