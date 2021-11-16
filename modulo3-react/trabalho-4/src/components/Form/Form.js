import { Formik, useFormik } from "formik";
import MaskedInput from 'react-text-mask';
import styles from './Form.module.css';

// reinicializar valores do formik com state: https://stackoverflow.com/questions/53920132/how-to-pass-state-values-to-initial-values-in-formik-in-react-js

function Form({ setUsers, users, idAtual, setIdAtual, valoresIniciais, setValoresIniciais, emEdicao, setEmEdicao, valoresPadrao }) {
  const phoneMask = ["(",/[1-9]/,/\d/,")", " ",/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/];

  const validate = values => {
    const errors = {};
    if(!values.firstName || values.firstName.length > 20){
      errors.firstName = 'Nome deve ter entre 1 e 20 caracteres';
    }

    if(!values.lastName || values.lastName.length > 20){
      errors.lastName = "Último nome deve ter entre 1 e 20 caracteres";
    }

    if (!values.email) {
      errors.email = 'É necessário informar um email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email inválido';
    }

    if(!values.address || values.address.length > 50){
      errors.address = 'Endereço deve conter no máximo 50 caracteres';
    }
    let regex = new RegExp('[_()-]','g')
    let phone = values.phone.replaceAll(regex,'').replace(' ','');
    if(phone.length <7){
      errors.phone = "Telefone deve conter no mínimo 7 digitos";
    }
    
    return errors;
  };

  const cancelar = ()=>{
    setEmEdicao({status:false,id:0});
    setValoresIniciais(valoresPadrao)
  }
  const formik = useFormik({
    initialValues: valoresIniciais,
    enableReinitialize: true,
    validate,
    onSubmit: values => {
      
      if(!emEdicao.status){
        values.id = idAtual;
        setIdAtual(idAtual+1);
        setUsers([...users,values]);
        
      }
      else{
        
        let elemento = users.find(user => user.id === emEdicao.id);
        elemento = {
          id: emEdicao.id,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          address: values.address,
          phone: values.phone
        };
        
        setUsers([...users.filter(user => user.id !== emEdicao.id),elemento]);
        setEmEdicao({status:false,id:0});
        setValoresIniciais(valoresPadrao)
      }
      
      formik.resetForm();
      
    },
    
  })
  return (
    <div className={styles.divForm}>
      <div className={styles.titulo}>
        {!emEdicao.status ? (
          <span>Cadastro</span>
        ):(
          <span>Editando usuário {emEdicao.id}</span>
        )}
      </div>
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div>
        <label>Primeiro nome:</label>
        <input type="text" name="firstName" id="firstName" onChange={formik.handleChange} value={formik.values.firstName} maxLength="20"/>
        {formik.errors.firstName ? (<div className='error'>{formik.errors.firstName}</div>): null}
      </div>
      <div>
        <label>Último nome:</label>
        <input type="text" name="lastName" id="lastName" onChange={formik.handleChange} value={formik.values.lastName} maxLength="20"/>
        {formik.errors.lastName ? (<div className='error'>{formik.errors.lastName}</div>): null}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? (<div className='error'>{formik.errors.email}</div>): null}
      </div>
      <div>
        <label>Endereço:</label>
        <input type="text" name="address" id="address" onChange={formik.handleChange} value={formik.values.address} />
        {formik.errors.address ? (<div className='error'>{formik.errors.address}</div>): null}
      </div>
      <div>
        <label>Telefone:</label>
        <MaskedInput mask={phoneMask} name="phone" id="phone" onChange={formik.handleChange} value={formik.values.phone}/>
        {formik.errors.phone ? (<div className='error'>{formik.errors.phone}</div>): null}
        
      </div>
      {!emEdicao.status ? (<button type="submit" className={styles.cadastrar}>Cadastrar</button>) : 
      ( <div className={styles.divBotoes}>
        <button type="button" onClick={()=> cancelar()}>Cancelar</button>
        <button type="submit">Salvar</button>
        </div>
      )} 
      
    </form>
    </div>
  );
}

export default Form;

