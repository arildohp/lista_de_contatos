import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  categoria,
  id,
  nContato: nContatoOriginal,
  email: emailOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [nContato, setNContato] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (nContatoOriginal.length > 0) {
      setNContato(nContatoOriginal)
    }
  }, [nContatoOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdiçao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setNContato(nContatoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{nome}</S.Titulo>
      <S.Tag categoria={categoria}>{categoria}</S.Tag>
      <S.Descricao />
      <label>Nome</label>
      <S.Contato
        disabled={!estaEditando}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
        placeholder="Nome Completo"
        required
      />
      <label>Email</label>
      <S.Contato
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="email"
        placeholder="exemplo@exemplo.com"
        required
      />
      <label>Telefone</label>
      <S.Contato
        disabled={!estaEditando}
        value={nContato}
        onChange={(evento) => setNContato(evento.target.value)}
        type="tel"
        placeholder="(XX) XXXXX-XXXX"
        required
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    nContato,
                    id,
                    email,
                    categoria
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdiçao}>
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
