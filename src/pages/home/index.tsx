import BarraLateral from '../../Container/BarraLateral'
import ListaDeContatos from '../../Container/ListaDeContatos'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
