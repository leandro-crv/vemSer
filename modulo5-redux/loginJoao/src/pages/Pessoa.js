import { useEffect } from "react";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import styles from './Pessoa.module.css';
import Moment from 'react-moment';
import {connect} from 'react-redux';


import {getPessoas} from '../store/actions/PessoaActions';
import { prepareEdition } from "../store/actions/PessoaActions";
import { deletePessoa } from "../store/actions/PessoaActions";
import { api } from "../api";
import { useNavigate } from "react-router";
import { addMaskCpf } from "../helpers";

const Pessoa = ({pessoas, dispatch}) => {
 
  const navigate = useNavigate();

  useEffect(()=>{
    // getPessoas(dispatch);
    setTimeout(()=>{
      getPessoas(dispatch)
    },500)
  },[]);


  const prepareEditionGoPage = (pessoa)=>{
    prepareEdition(pessoa, dispatch);
    navigate('/cadastro');
  }

  return (
    <>
      <h1 className='titulo'>Pessoas</h1>
      <div className={styles.listaPessoas}>
      {pessoas !== undefined ? (
        pessoas.map((pessoa) =>
        (
          <div className={styles.pessoa} key={pessoa.idPessoa}>
            <div className={styles.pessoaHeader}>
              <small> Usuário {pessoa.idPessoa} </small>
              <AiFillEdit onClick={() => prepareEditionGoPage(pessoa)} />
              <AiFillDelete onClick={() => deletePessoa(pessoa.idPessoa, dispatch)} />
            </div>
            <div className={styles.pessoaInfo}>
              <div><span className={styles.pessoaLabel}>Nome: </span>{pessoa.nome}</div>
              <div><span className={styles.pessoaLabel}>CPF: </span>{addMaskCpf(pessoa.cpf)}</div>
              <div><span className={styles.pessoaLabel}>E-mail: </span>{pessoa.email}</div>
              <div><span className={styles.pessoaLabel}>Data de nascimento: </span><Moment date={pessoa.dataNascimento} format='DD/MM/YYYY'/></div>
            </div>
          </div>
        )
        )
      ) : <p>Lista vazia</p>}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth,
  pessoas: state.pessoaReducer.pessoas,
  edit: state.pessoaReducer.edit
})


export default connect(mapStateToProps) (Pessoa);