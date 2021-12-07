import { connect } from "react-redux";
import { sortPessoas } from "../store/actions/PessoaActions";


const Ordenar = ({dispatch,pessoas})=>{
  return(
    <div className='ordenar'>
       <input type='radio' name='ordenar' value='id' onClick={()=>sortPessoas(dispatch,pessoas,'id')}/>
       <label>Id</label>
      <input type='radio' name='ordenar' value='nome' onClick={()=>sortPessoas(dispatch,pessoas,'nome')}/>
      <label>Nome</label>
      <input type='radio' name='ordenar' value='data' onClick={()=>sortPessoas(dispatch,pessoas,'data')}/>
      <label>Data de nascimento</label>
    </div>
  );
}


const mapStateToProps = state => ({
  pessoas: state.pessoaReducer.pessoas,
})


export default connect(mapStateToProps)(Ordenar);
