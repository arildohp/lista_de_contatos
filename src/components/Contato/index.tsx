import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Titulo>Contato</S.Titulo>
    <S.Descricao>
      <S.Tag>trabalho</S.Tag>
      <label>Nome</label>
      <S.Contato type="text" placeholder="Nome Completo" required />
      <label>Email</label>
      <S.Contato type="email" placeholder="exemplo@exemplo.com" required />
      <label>Telefone</label>
      <S.Contato type="tel" placeholder="(XX) XXXXX-XXXX" required />
    </S.Descricao>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
