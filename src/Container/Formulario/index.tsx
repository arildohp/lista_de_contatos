import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Form, Contato, SCampo, Opcoes } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [nContato, setNContato] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.FAMILIA)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nContato,
        nome,
        categoria,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <h3>Nome</h3>
        <SCampo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <h3>Email</h3>
        <SCampo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          as="input"
          type="email"
          placeholder="exemplo@exemplo.com"
        />
        <h3>Telefone</h3>
        <SCampo
          value={nContato}
          onChange={({ target }) => setNContato(target.value)}
          as="input"
          type="tel"
          placeholder="(XX) XXXXX-XXXX"
        />
        <Contato>
          {Object.values(enums.Categoria).map((categoria) => (
            <Opcoes key={categoria}>
              <input
                value={categoria}
                name="categoria"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categoria)
                }
                id={categoria}
                defaultChecked={categoria === enums.Categoria.FAMILIA}
              />
              {''}
              <label htmlFor={categoria}>{categoria}</label>
            </Opcoes>
          ))}
        </Contato>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
