import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  categoria?: enums.Categoria
}

function retornaCorDeFundo(props: TagProps): string {
  if ('categoria' in props) {
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.laranja
    if (props.categoria === enums.Categoria.AMIGOS) return variaveis.amarelo
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.azul
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Titulo = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: inline-block;
`
export const Descricao = styled.form`
  padding: 8px;
`
export const Contato = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  margin-bottom: 8px;
  margin-top: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
