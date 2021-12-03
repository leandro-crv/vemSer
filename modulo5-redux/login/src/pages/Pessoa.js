import { useEffect } from "react";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import styles from './Pessoa.module.css';
import Moment from 'react-moment';

import {connect} from 'react-redux';
import {getPessoas} from '../store/actions/PessoaActions';

const Pessoa = () => {

  // const { getPessoas, listPessoas, deletePessoa, prepareEdition } = useContext(PessoaContext)

  // useEffect(() => {
  //   getPessoas();
  // }, [])

  // TODO utilizar substring
  // const addMaskCpf = (cpf) =>{
  //   return `${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}`
  // }

  return (
    <>
      <h1>Pessoas</h1>
      <button onClick={()=> getPessoas()}>GET PESSOA</button>
      {/* <div className={styles.listaPessoas}>
      {listPessoas !== undefined ? (
        listPessoas.map((pessoa) =>
        (
          <div className={styles.pessoa} key={pessoa.idPessoa}>
            <div className={styles.pessoaHeader}>
              <small> Usuário {pessoa.idPessoa} </small>
              <AiFillEdit onClick={() => prepareEdition(pessoa)} />
              <AiFillDelete onClick={() => deletePessoa(pessoa.idPessoa)} />
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
      </div> */}
    </>
  );
}

const mapStateToProps = state => ({
  pessoas: state.pessoaReducer.pessoas
})


export default connect(mapStateToProps) (Pessoa);
