import { useDispatch } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="familia" contador={1} />
          <FiltroCard legenda="trabalho" contador={2} />
          <FiltroCard legenda="amigos" contador={3} />
          <FiltroCard legenda="todos" contador={4} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
