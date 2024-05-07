import { useDispatch } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'familia' | 'amigos' | 'trabalho' | 'todos'
}

const FiltroCard = ({ legenda, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio

    return mesmoCriterio
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'amigos') {
      return contatos.itens.filter((item) => item.categoria === criterio).length
    }
    if (criterio === 'familia') {
      return contatos.itens.filter((item) => item.categoria === criterio).length
    }
    if (criterio === 'trabalho') {
      return contatos.itens.filter((item) => item.categoria === criterio).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.label>{legenda}</S.label>
    </S.Card>
  )
}

export default FiltroCard
