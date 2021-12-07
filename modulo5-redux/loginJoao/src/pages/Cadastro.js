import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import moment from 'moment';
import { connect } from 'react-redux';
import styles from './Cadastro.module.css';
import { postPessoa } from '../store/actions/PessoaActions';
import { putPessoa } from '../store/actions/PessoaActions';
import { cancelEdit } from '../store/actions/PessoaActions';
import { useNavigate } from 'react-router';
import InputMask from 'react-input-mask';
import { removeMaskCep, removeMaskCpf } from '../helpers';



const Cadastro = ({ edit, pessoas, dispatch }) => {
  const navigate = useNavigate();

  const cancelEditBackPage = () => {
    cancelEdit(dispatch);
    navigate('/pessoa')
  }

  useEffect(() => {
    return () => {
      cancelEdit(dispatch)
    }
  }, [])

  const initialPessoa = {
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: ''
  }

  const validate = (values) => {
    const errors = {};
    if (!values.nome) {
      errors.nome = 'Nome é obrigatório';
    }

    const cpfNumeros = removeMaskCpf(values.cpf);
    if (cpfNumeros.length !== 11) {
      errors.cpf = 'CPF deve conter 11 dígitos';
    }

    if (!values.email) {
      errors.email = 'Email é obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email inválido';
    }

    if (!moment(values.dataNascimento, 'DDMMYYYY').endOf('day').fromNow().match('ago')) {
      errors.dataNascimento = 'Data de nascimento não pode ser maior ou igual a hoje'
    };

    return errors;
  }

  return (
    <div className={styles.cadastro}>
      <div className={styles.titulos}>
        {!edit.status ? (
          <>
            <h1>Cadastrar</h1>
            <small>Novo usuário</small>
          </>
        ) : (
          <>
            <h1>Editar</h1>
            <small>
              <span>id usuário <strong>{edit.pessoa.idPessoa}</strong> e CPF <strong>{edit.pessoa.cpf}</strong></span>
            </small>
          </>
        )}
      </div>
      <Formik
        initialValues={edit.status ? edit.pessoa : initialPessoa}
        enableReinitialize={true}
        validate={validate}
        onSubmit={async (values) => {
          if (!edit.status) {
            values.cpf = removeMaskCpf(values.cpf);
            if (pessoas.find(pessoa => pessoa.cpf === values.cpf)!==undefined) {
              alert('Este cpf já existe')
            } else {
              values.dataNascimento = moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
              console.log('values são: ', values)
              postPessoa(values, dispatch);
            }

          }
          else {
            let id = values.idPessoa;
            delete values['idPessoa'];
            console.log('values são: ', values)
            putPessoa(values, id, dispatch);
          }
        }}
      >
        <Form>
          <div>
            <label htmlFor="nome">Nome</label>
            <Field id="nome" name="nome" placeholder="Digite seu nome" maxlength="30"/>
            <ErrorMessage name='nome' render={msg => <div className='error'>{msg}</div>} />
          </div>
          <div>

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Digite seu email"
              type="email"
              maxlength="30"
            />
            <ErrorMessage name='email' render={msg => <div className='error' >{msg}</div>} />
          </div>
          <div>
            <label htmlFor="cpf">CPF</label>
            <Field id="cpf" name="cpf" render={({ field }) => (
              <InputMask {...field} mask={`999.999.999-99`} disabled={edit.status ? true : false} />
            )} />
            <ErrorMessage name='cpf' render={msg => <div className='error'>{msg}</div>} />
          </div>
          <div>
            <label htmlFor="dataNascimento">Data de nascimento</label>
            <Field id="dataNascimento" name="dataNascimento" render={({ field }) => (
              <InputMask {...field} mask={`99/99/9999`} />
            )} />
            <ErrorMessage name='dataNascimento' render={msg => <div className='error'>{msg}</div>} />
          </div>
          {!edit.status ? (
            <button type="submit" className='botao1'>Cadastrar</button>
          ) : (
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
  pessoas: state.pessoaReducer.pessoas,
  edit: state.pessoaReducer.edit
})


export default connect(mapStateToProps)(Cadastro);


