import BarraLateral from './Container/BarraLateral'
import ListaDeContatos from './Container/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
