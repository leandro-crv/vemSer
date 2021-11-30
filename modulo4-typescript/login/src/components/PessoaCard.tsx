import { PessoaDTO } from "../model/PessoaDTO";

const PessoaCard = (pessoa:PessoaDTO)=>{
  return(
  <>
    <p>Teste</p>
    <p>{pessoa.nome}</p>
  </>
  );
}
export default PessoaCard;