import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from './Login.module.css';
import * as LoginActions from '../store/actions/login';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { useEffect } from 'react';

const Login = ({handleLogin, auth, token})=>{

  return(
    <div className={styles.login}>
      <h1 className={styles.titulo}>Entrar</h1>
      <p> auth: {auth} </p>
      <p> token: {token} </p>
      <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(
          values,
          { setSubmitting }
        ) => {
          console.log('values é: ', values)
          handleLogin(values);
          
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
        </Form>
      </Formik>
    </div>
  )
}


const mapStateToProps = state => ({
  auth: state.loginReducer.auth,
  token: state.loginReducer.token
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(LoginActions,dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps) (Login);
