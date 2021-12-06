import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import {connect} from 'react-redux';
import {handleLogin} from '../store/actions/AuthActions';
import styles from './Login.module.css';

function Login({ auth,dispatch }) {
 
  const formik = useFormik({
    initialValues: {
      usuario: '',
      senha: '',
    },
    onSubmit: values => {
      handleLogin(values, dispatch)
    }
  });

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
      <div>
       <label htmlFor="usuario">Login</label>
       <input
         id="usuario"
         name="usuario"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.usuario}
       />
      </div>
      <div>
       <label htmlFor="senha">Senha</label>
       <input
         id="senha"
         name="senha"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.senha}
       />
      </div>
      <div>
       <button type="submit" className='botao1'>Entrar</button>
      </div>
     </form>  
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
});

export default connect(mapStateToProps)(Login)
