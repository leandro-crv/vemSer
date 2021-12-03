import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from './Login.module.css';
import {connect} from 'react-redux';
import { handleLogin } from '../store/actions/AuthActions';
import api from '../api';



const Login = ({ auth,dispatch})=>{
  console.log('auth é: ',auth)
  
  return(
    
    <div className={styles.login}>
      <h1 className={styles.titulo}>Entrar</h1>
    
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
          handleLogin(values, dispatch);
          
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
  auth: state.authReducer.auth,
})


export default connect(mapStateToProps) (Login);
