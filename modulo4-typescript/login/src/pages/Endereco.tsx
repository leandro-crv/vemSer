import { useState, useContext } from 'react';
import { Formik, Field, Form, FormikHelpers, FormikErrors, ErrorMessage } from 'formik';
import ReactInputMask from 'react-input-mask';
import axios from 'axios';

import { EnderecoDTO } from '../model/EnderecoDTO';
import { PessoaDTO } from '../model/PessoaDTO';
import { PessoaContext } from '../context/PessoaContext';

import {BsSearch} from 'react-icons/bs'

import styles from './Endereco.module.css';

interface Cep {
  cep: string;
}

const Endereco = () => {
  const [adrressValid, setAddressValid] = useState(true);
  const [idPessoa, setIdPessoa] = useState<string>('');
  const initialAddress = {
    cep: '',
    cidade: '',
    complemento: '',
    estado: '',
    idEndereco: 0,
    logradouro: '',
    pais: '',
    tipo: '',
    numero: 0
  }
  const { getPessoas, listPessoas, postEndereco } = useContext<any>(PessoaContext);
  const [address, setAdress] = useState<EnderecoDTO>(initialAddress);
  const getAddress = async (cep: string) => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log('data é: ', data)
    if (data.erro) {
      console.log("data error")
      setAddressValid(false);
      setAdress(initialAddress);
    }
    else {
      const newEnderco: EnderecoDTO = {
        cep: data.cep,
        cidade: data.localidade.length ? data.localidade : 'cidade não informada',
        complemento: data.complemento.length ? data.complemento : 'Sem complemento',
        estado: data.uf.length ? data.uf : 'Estado não informado',
        logradouro: data.logradouro ? data.logradouro : 'Logradouro não informado',
        pais: 'Brasil',
        tipo: 'COMERCIAL',
        numero: data.numero !== undefined ? data.numero : 0
      }
      getPessoas();
      setAddressValid(true);
      setAdress(newEnderco);

    }
  }

  const pegarIdPessoa = (e: any) => {
    const pessoa = [...e.target].find((element: any) => element.selected);
    setIdPessoa(pessoa.value);
    
  }
  const validateCep = (values: Cep) => {
    const errors: FormikErrors<Cep> = {};
    let cepNumeros = values.cep.replaceAll(new RegExp('[_-]', 'gi'), '');
    if (!values.cep) {
      errors.cep = 'CEP é obrigatório';
    } else if (cepNumeros.length !== 8) {
      errors.cep = 'CEP deve conter 8 números';
    }
    return errors;
  }

  const validateAddress = (values: EnderecoDTO) => {
    const errors: FormikErrors<EnderecoDTO> = {};
    if (!values.cidade) {
      errors.cidade = 'Cidade é campo obrigatório';
    }
    if (!values.estado) {
      errors.estado = 'Estado é um campo obrigatório';
    }


  }
  return (
    <div className={styles.form}>
      <h1 className={styles.titulo}>Endereço</h1>
      <Formik
        initialValues={{
          cep: '',
        }}
        validate={validateCep}
        onSubmit={(
          values: Cep,
          { setSubmitting }: FormikHelpers<Cep>
        ) => {
          getAddress(values.cep);
          setSubmitting(false);
        }}
      >
        <Form>
          <div className={styles.cep}>
          <label htmlFor="cep">Cep</label>
          <Field id="cep" name="cep" render={({ field }: any) => (
            <ReactInputMask {...field} mask={`99999-999`} placeholder='Insira seu CEP' />
          )} />
          <ErrorMessage name='cep' />
          {!adrressValid ? (<p className='error'>CEP inexistente</p>) : null}
          <button type="submit" className={styles.submitCep}><BsSearch/></button>
          </div>
        </Form>
      </Formik>
      <Formik
        initialValues={address}
        validate={validateAddress}
        enableReinitialize={true}
        onSubmit={(
          values: EnderecoDTO,
          { setSubmitting }: FormikHelpers<EnderecoDTO>
        ) => {
          console.log('values submit endereço', values);
          postEndereco(values, idPessoa)
          setAdress(initialAddress);
          setSubmitting(false);
        }}
      >
        <Form>
          <>
            <div>
              <label htmlFor="cidade">Cidade</label>
              <Field id="cidade" name="cidade" />
              <ErrorMessage name='cidade' />
            </div>
            <div>
              <label htmlFor="logradouro">Logradouro</label>
              <Field id="logradouro" name="logradouro" />
              <ErrorMessage name='logradouro' />
            </div>
            <div className={styles.ufEPais}>
            <div>
              <label htmlFor="numero">Número</label>
              <Field id="numero" name="numero" type='number' />
              <ErrorMessage name='numero' />
            </div>
            <div>
              <label htmlFor="estado">UF</label>
              <Field id="estado" name="estado" />
              <ErrorMessage name='estado' />
            </div>
            <div>
              <label htmlFor="pais">País</label>
              <Field id="pais" name="pais" />
              <ErrorMessage name='pais' />
            </div>
            </div>
           
            {listPessoas && listPessoas.length ? (
              <div>
                <label>Adicionar endereço a: </label>
                <Field as="select" name="user" id='usuarios-endereco' onChange={(e: any) => pegarIdPessoa(e)}>
                  {listPessoas.map((pessoa: PessoaDTO) => (
                    <option value={pessoa.idPessoa} >{pessoa.nome}</option>
                  ))}
                </Field>
              </div>
            ) : null}

            <button type="submit" className='botao1'>Enviar</button>
          </>
        </Form>
      </Formik >
    </div >
  );
};

export default Endereco;