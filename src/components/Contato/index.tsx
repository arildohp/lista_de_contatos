import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  contato: contatoOriginal,
  nome,
  categoria,
  id,
  nContato,
  email
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contato, setContato] = useState('')

  return (
    <S.Card>
      <S.Titulo>{nome}</S.Titulo>
      <S.Tag categoria={categoria}>{categoria}</S.Tag>
      <S.Descricao />
      <label>Nome</label>
      <S.Contato
        value={nome}
        onChange={(evento) => setContato(evento.target.value)}
        type="text"
        placeholder="Nome Completo"
        required
      />
      <label>Email</label>
      <S.Contato
        value={email}
        onChange={(evento) => setContato(evento.target.value)}
        type="email"
        placeholder="exemplo@exemplo.com"
        required
      />
      <label>Telefone</label>
      <S.Contato
        value={nContato}
        onChange={(evento) => setContato(evento.target.value)}
        type="tel"
        placeholder="(XX) XXXXX-XXXX"
        required
      />
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
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
