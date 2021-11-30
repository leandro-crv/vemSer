import ReactInputMask from 'react-input-mask';
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
import styles from './Cadastro.module.css';

// https://www.npmjs.com/package/react-input-mask
// import ReactInputDateMask from 'react-input-date-mask';
// import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";


import { PessoaDTO } from '../model/PessoaDTO';
import { useContext, useEffect } from 'react';
import { PessoaContext } from '../context/PessoaContext';



const Cadastro: React.FC<{}> = () => {
  const { postPessoa } = useContext<any>(PessoaContext);
  const { infoPessoa, edit, cancelEdit, putPessoa } = useContext<any>(PessoaContext);
  const initialValues: PessoaDTO = infoPessoa;

  useEffect(()=>{
    if(initialValues.dataNascimento.length){
      const newData = initialValues.dataNascimento.split('-');
      initialValues.dataNascimento = newData.reverse().join('');
    }
  },[])

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

    
    const cpfNumeros = removeMaskCpf(values.cpf);
    if(cpfNumeros.length!==11){
      errors.cpf = 'CPF deve conter 11 dígitos';
    }

     console.log('data', values.dataNascimento) 
    if (values.dataNascimento.length!==10) {
      errors.dataNascimento = 'Data de nascimento inválida';
    } else if(!moment(values.dataNascimento).isValid()){
      errors.dataNascimento = 'Data de nascimento inválida';
    } else if(!(moment(values.dataNascimento).startOf('day').fromNow()).match(/ago/)){
      errors.dataNascimento = 'Data não pode ser superior a hoje';
    }  

    return errors;
  }


  const removeMaskCpf = (cpf:string)=>{
    return cpf.replaceAll(new RegExp(/[._-]/,'g'),'');
  }

  return (
    <div className={styles.cadastro}>
      {!edit ? (<h1 className={styles.titulo}>Novo usuário</h1>) : (<h1 className={styles.titulo}>Editar usuário</h1>)}
      <Formik
        initialValues={initialValues}
        validate={validate}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          // console.log({ values, actions });
          values.cpf = removeMaskCpf(values.cpf)
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
            <Field name="cpf" placeholder="cpf" render={({field}:any)=>(
              <ReactInputMask {...field} mask={`999.999.999.-99`} placeholder="Insira seu cpf" />
            )} />
            <ErrorMessage name='cpf' />
          </div>
          <div>
            <label>Data de nascimento:</label>
            <Field type='date' name="dataNascimento"/>
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