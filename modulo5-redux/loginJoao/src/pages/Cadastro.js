import React, { useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import moment from 'moment';
import { connect } from 'react-redux';
import styles from './Cadastro.module.css';
import {postPessoa} from '../store/actions/PessoaActions';
import {putPessoa} from '../store/actions/PessoaActions';
import {cancelEdit} from '../store/actions/PessoaActions';
import { useNavigate } from 'react-router';



const Cadastro = ({edit, dispatch}) => {
  const navigate = useNavigate();
  const cancelEditBackPage = ()=>{
    cancelEdit(dispatch);
    navigate('/pessoa')
  }

  useEffect(()=>{
    return ()=>{
      cancelEdit(dispatch)
    }
  },[])

  const initialPessoa = {
    nome:'',
    email:'',
    cpf:'',
    dataNascimento:''
  }



  return (
    <div className={styles.cadastro}>
      
      <h1 className={styles.titulo}>Cadastro</h1>
      <Formik
        initialValues={edit.status ? edit.pessoa : initialPessoa}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if(!edit.status){
            postPessoa(values,dispatch);
          }
          else{
            let id = values.idPessoa;
            delete values['idPessoa'];
            putPessoa(values,id, dispatch);
          }
        }}
      >
        <Form>
          <div>
            <label htmlFor="nome">Nome</label>
            <Field id="nome" name="nome" placeholder="Digite seu nome" />
          </div>
          <div>

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Digite seu email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="cpf">CPF</label>
            <Field id="cpf" name="cpf" placeholder="Digite seu CPF" />
          </div>
          <div>
            <label htmlFor="dataNascimento">Data de nascimento</label>
            <Field id="dataNascimento" name="dataNascimento" placeholder="Insira sua data de nascimento" />
          </div>
          {!edit.status ? (
            <button type="submit" className='botao1'>Cadastrar</button>
          ): (
            <div className={styles.doisBotoes}>
                <button type='button' onClick={() => cancelEditBackPage()} className='botao2'> Cancelar </button>
                <button type="submit" className='botao1'> Salvar </button>
              </div>
          )}
        </Form>
      </Formik>
    </div>
  );
}

const mapStateToProps = state => ({
  edit: state.pessoaReducer.edit
})


export default connect(mapStateToProps) (Cadastro);


