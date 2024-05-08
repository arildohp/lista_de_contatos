import { MainContainer, Titulo } from '../../styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Novo contato</Titulo>
    <form>
      <input type="text" placeholder="Nome completo" />
      <input type="text" placeholder="Email" />
      <input type="number" placeholder="Numero" />
      <input name="contato" type="radio" id="familia" /> {''}
      <label htmlFor="familia">familia</label>
      <input name="contato" type="radio" id="amigos" /> {''}
      <label htmlFor="amigos">amigos</label>
      <input name="contato" type="radio" id="trabalho" /> {''}
      <label htmlFor="trabalho">trabalho</label>
      <button type="submit">Cadastrar</button>
    </form>
  </MainContainer>
)

export default Formulario
