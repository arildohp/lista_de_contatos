import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Form, Contato, SCampo } from './styles'
import { label } from '../../components/FiltroCard/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [nContato, setNContato] = useState('')
  const [familia, setFamilia] = useState('')
  const [amigos, setAmigos] = useState('')
  const [trabalho, setTrabalho] = useState('')

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form>
        <SCampo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <SCampo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          as="input"
          type="email"
          placeholder="Email"
        />
        <SCampo
          value={nContato}
          onChange={({ target }) => setNContato(target.value)}
          as="input"
          type="number"
          placeholder="Numero"
        />
        <Contato>
          <input
            value={familia}
            onChange={({ target }) => setFamilia(target.value)}
            name="contato"
            type="radio"
            id="familia"
          />{' '}
          {''}
          <label htmlFor="familia">familia</label>
          <input
            value={amigos}
            onChange={({ target }) => setAmigos(target.value)}
            name="contato"
            type="radio"
            id="amigos"
          />{' '}
          {''}
          <label htmlFor="amigos">amigos</label>
          <input
            value={trabalho}
            onChange={({ target }) => setTrabalho(target.value)}
            name="contato"
            type="radio"
            id="trabalho"
          />{' '}
          {''}
          <label htmlFor="trabalho">trabalho</label>
        </Contato>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
