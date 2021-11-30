import { useContext, useEffect, useState } from "react";
import { PessoaDTO } from '../model/PessoaDTO';
import { PessoaContext } from "../context/PessoaContext";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import styles from './Pessoa.module.css';
import Moment from 'react-moment';

const Pessoa = () => {

  const { getPessoas, listPessoas, deletePessoa, prepareEdition } = useContext<any>(PessoaContext)

  useEffect(() => {
    getPessoas();
  }, [])


  return (
    <>
      <h1>Pessoas</h1>
      <div className={styles.listaPessoas}>
      {listPessoas !== undefined ? (
        listPessoas.sort((a:any, b:any) => a.idPessoa > b.idPessoa ? 1 : -1).map((pessoa: PessoaDTO) =>
        (
          <div className={styles.pessoa} key={pessoa.idPessoa}>
            <div className={styles.pessoaHeader}>
              <small> Usuário {pessoa.idPessoa} </small>
              <AiFillEdit onClick={() => prepareEdition(pessoa)} />
              <AiFillDelete onClick={() => deletePessoa(pessoa.idPessoa)} />
            </div>
            <div className={styles.pessoaInfo}>
              <div><span className={styles.pessoaLabel}>Nome: </span>{pessoa.nome}</div>
              <div><span className={styles.pessoaLabel}>CPF: </span>{pessoa.cpf}</div>
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
export default Pessoa;