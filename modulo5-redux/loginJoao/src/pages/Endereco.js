import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import axios from 'axios';

const Endereco = () => {
  const [cepNotFound, setCepNotFound] = useState(false);
  const initialAddress = {
    cidade: '',
    logradouro: '',
    numero: 0,
    estado: '',
    pais: ''
  }

  const [address, setAddress] = useState(initialAddress);
  
  const getCep = async (cep) => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (data) {
      setCepNotFound(false);
      setAddress({
        cidade: data.localidade,
        logradouro: data.logradouro ? data.logradouro : '',
        numero: data.numero ? data.numero : 0,
        estado: data.uf,
        pais: 'Brasil'
      })
    }
    console.log('data é:', data)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          cep: '',

        }}
        onSubmit={(values) => {
          getCep(values.cep)
        }}
      >
        <Form>
          <div>
            <label htmlFor="cep">CEP</label>
            <Field id="cep" name="cep" placeholder="" />
          </div>
          <button type="submit">Enviar CEP</button>
        </Form>
      </Formik>
      <Formik
        initialValues={address}
        enableReinitialize={true}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div>
            <label htmlFor="cidade">Cidade</label>
            <Field id="cidade" name="cidade" placeholder="" />
          </div>
          <div>
            <label htmlFor="logradouro">Logradouro</label>
            <Field id="logradouro" name="logradouro" placeholder="" />
          </div>
          <div className={StyleSheet.ufEPais}>
            <div>
              <label htmlFor="numero">Número</label>
              <Field id="numero" name="numero" placeholder="" />
            </div>
            <div>
              <label htmlFor="estado">UF</label>
              <Field id="estado" name="estado" placeholder="" />
            </div>
            <div>
              <label htmlFor="pais">País</label>
              <Field id="pais" name="pais" placeholder="" />
            </div>
          </div>
          <button type="submit">Cadastrar</button>
        </Form>
      </Formik>
    </div>
  )
};

export default Endereco;