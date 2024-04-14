import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  categoria: string
}

const Contato = ({ nome, categoria }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{nome}</S.Titulo>
      <S.Tag categoria={categoria}>{categoria}</S.Tag>
      <S.Descricao />
      <label>Nome</label>
      <S.Contato type="text" placeholder="Nome Completo" required />
      <label>Email</label>
      <S.Contato type="email" placeholder="exemplo@exemplo.com" required />
      <label>Telefone</label>
      <S.Contato type="tel" placeholder="(XX) XXXXX-XXXX" required />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
