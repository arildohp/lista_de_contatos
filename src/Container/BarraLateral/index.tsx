import { useDispatch } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard criterio="familia" legenda="familia" />
              <FiltroCard criterio="trabalho" legenda="trabalho" />
              <FiltroCard criterio="amigos" legenda="amigos" />
              <FiltroCard criterio="todos" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
