import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import styles from './Endereco.module.css';
import InputMask from 'react-input-mask';
import { removeMaskCep } from '../helpers';
import {AiOutlineSearch} from 'react-icons/ai';
import { useNavigate } from 'react-router';

const Endereco = () => {
  const navigate = useNavigate();
  const [cepNotFound, setCepNotFound] = useState(false);
  const initialAddress = {
    cidade: '',
    logradouro: '',
    numero: '',
    estado: '',
    pais: ''
  }

  const [address, setAddress] = useState(initialAddress);
  
  const getCep = async (cep) => {  
      const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if(data.erro){
        setCepNotFound(true);
      }
      else{
        setCepNotFound(false);
        setAddress({
          cidade: data.localidade,
          logradouro: data.logradouro ? data.logradouro : '',
          numero: data.numero ? data.numero : '',
          estado: data.uf,
          pais: 'Brasil'
        })
      }
  }

  const validateCep = (values) =>{
    const errors = {};
    const cepNumeros = removeMaskCep(values.cep)
    
    if(!cepNumeros){
      errors.cep = 'CEP é um campo obrigatório';
    } else if(cepNumeros.length!==8){
      errors.cep = 'CEP deve conter 8 dígitos';
    }
    return errors;
  }

  const validateAddress = (values) => {
    const errors = {};

    if(!values.cidade){
      errors.cidade = 'Cidade é um campo obrigatório';
    }

    if(!values.estado){
      errors.estado = 'UF é um campo obrigatório';
    }

    return errors;
  }

  return (
    <div className={styles.form}>
      <h1 className='titulo'>Cadastrar endereço</h1>
      <Formik
        initialValues={{
          cep: '',

        }}
        validate={validateCep}
        onSubmit={(values) => {
          getCep(removeMaskCep(values.cep));
        }}
      >
        <Form>
          <div className={styles.divForm}>
            <label htmlFor="cep">CEP</label>
            <Field id="cep" name="cep" render={({field})=>(
              <InputMask {...field} mask={`99999-999`} />
            )} />
             <button type="submit" className={styles.submitCep}><AiOutlineSearch/></button>          
            <ErrorMessage name='cep' render={msg => <div className='error'>{msg}</div>}/>
            {cepNotFound ? (<p className='error'> CEP não encontrado </p>): ''}
          </div>
         
        </Form>
      </Formik>
      <Formik
        initialValues={address}
        enableReinitialize={true}
        validate={validateAddress}
        onSubmit={async (values) => {
          console.log("values address",values)
          alert(`Endereço cadastrado. Valores no console`)
          navigate('/pessoa')
        }}
      >
        <Form>
          <div>
            <label htmlFor="cidade">Cidade</label>
            <Field id="cidade" name="cidade" placeholder="" />
            <ErrorMessage name='cidade' render={msg => <div className='error'>{msg}</div>}/>
          </div>
          <div>
            <label htmlFor="logradouro">Logradouro</label>
            <Field id="logradouro" name="logradouro" placeholder="" />
          </div>
          <div className={StyleSheet.ufEPais}>
            <div>
              <label htmlFor="numero">Número</label>
              <Field id="numero" name="numero" placeholder="" />
              <ErrorMessage name='cidade' render={msg => <div className='error'>{msg}</div>}/>
            </div>
            <div>
              <label htmlFor="estado">UF</label>
              <Field id="estado" name="estado" placeholder="" />
              <ErrorMessage name='cidade' render={msg => <div className='error'>{msg}</div>}/>
            </div>
            <div>
              <label htmlFor="pais">País</label>
              <Field id="pais" name="pais" placeholder="" />
              <ErrorMessage name='cidade' render={msg => <div className='error'>{msg}</div>}/>
            </div>
          </div>
          <button type="submit" className='botao1'>Cadastrar</button>
        </Form>
      </Formik>
    </div>
  )
};

export default Endereco;