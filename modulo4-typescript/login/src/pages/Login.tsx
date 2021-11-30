import { Formik, Field, Form, FormikHelpers } from 'formik';
import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styles from './Login.module.css';
import {Link} from 'react-router-dom';

interface LoginDTO {
  usuario: string;
  senha: string;
}


const Login = () => {
  const { handleLogin, auth } = useContext<any>(AuthContext);
  useEffect(()=>{
    if(auth){
      window.location.href = '/pessoa';
    }
  },[])
  return (
    <div className={styles.login}>
      <h1 className={styles.titulo}>Entrar</h1>
      <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(
          values: LoginDTO,
          { setSubmitting }: FormikHelpers<LoginDTO>
        ) => {
          console.log('values é: ', values)
          handleLogin(values)
        }}
      >
        <Form className='form-usuario'>
          <div>
            <label htmlFor="usuario">Usuário</label>
            <Field id="usuario" name="usuario" placeholder="usuário" />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <Field id="senha" type='password' name="senha" placeholder="senha" />
          </div>
          <button type="submit" className='botao1'>Entrar</button>
          <Link to='/cadastro'>Criar conta</Link>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;