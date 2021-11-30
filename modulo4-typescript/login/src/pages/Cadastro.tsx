import styles from './Cadastro.module.css'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  FormikErrors,
  ErrorMessage
} from 'formik';
import moment from 'moment';
import ReactInputMask from 'react-input-mask';

// https://www.npmjs.com/package/react-input-mask
// import ReactInputDateMask from 'react-input-date-mask';
// import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";


import { PessoaDTO } from '../model/PessoaDTO';
import { useContext } from 'react';
import { PessoaContext } from '../context/PessoaContext';



const Cadastro: React.FC<{}> = () => {
  const { postPessoa } = useContext<any>(PessoaContext);
  const { infoPessoa, edit, cancelEdit, putPessoa } = useContext<any>(PessoaContext);
  const initialValues: PessoaDTO = infoPessoa;

  const validate = (values: PessoaDTO) => {
    const errors: FormikErrors<PessoaDTO> = {};
    if(!values.nome){
      errors.nome = 'Nome é obrigatório';
    }
    if (!values.email) {
      errors.email = 'Email é obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email inválido';
    }

    if(!values.cpf){
      errors.cpf = 'CPF é obrigatório';
    } else if(values.cpf.length!==11){
      errors.cpf = 'CPF deve conter 11 dígitos. Não adicionar "." ou "-"';
    }
    if (!values.dataNascimento) {
      errors.dataNascimento = 'Data de nascimento é obrigatório';
    } else if(!(moment(values.dataNascimento).startOf('day').fromNow()).match(/ago/)){
      errors.dataNascimento = 'Data não pode ser superior a hoje';
    }  
    return errors;
  }

  return (
    <div className={styles.cadastro}>
      {!edit ? (<h1 className={styles.titulo}>Novo usuário</h1>) : (<h1 className={styles.titulo}>Editar usuário</h1>)}
      <Formik
        initialValues={initialValues}
        validate={validate}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          !edit ? postPessoa(values) : putPessoa(values);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div>
            <label>Nome:</label>
            <Field name="nome" placeholder="Nome" />
            <ErrorMessage name='nome' />
          </div>
          <div>
            <label>Email:</label>
            <Field name="email" placeholder="Email" />
            <ErrorMessage name='email' />
          </div>
          <div>
            <label>CPF:</label>
            <Field name="cpf" placeholder="cpf" />
            <ErrorMessage name='cpf' />
          </div>
          <div>
            <label>Data de nascimento:</label>
            <Field type='date' name="dataNascimento" placeholder="data de nascimento" />
            <ErrorMessage name='dataNascimento' />
          </div>
          <div className={styles.alinharBotoes}>
            {!edit ? (
              <button type="submit" className='botao1'>Enviar</button>
            ) : (
                <div className={styles.doisBotoes}>
                <button type='button' onClick={() => cancelEdit()} className='botao2'> Cancelar </button>
                <button type="submit" className='botao1'> Salvar </button>
              </div>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { Cadastro };