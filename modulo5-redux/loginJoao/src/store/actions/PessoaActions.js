import { api } from "../../api";
import { useNavigate } from "react-router";
import moment from "moment";
// GET
export const getPessoas = async (dispatch) => {
  const { data } = await api.get('/pessoa');
  if (data) {
    dispatch({
      type: 'GET_PESSOAS',
      pessoas: data.sort((pessoa1,pessoa2) => pessoa1.idPessoa > pessoa2.idPessoa ? 1 : -1)
    })
  } else {
    alert('Deu erro no login');
  }
}

export const sortPessoas = ( pessoas, criterio) =>{
  
  if(criterio==='id'){
    return pessoas.sort((pessoa1,pessoa2) => pessoa1.idPessoa > pessoa2.idPessoa ? 1 : -1)
  } else if(criterio==='data'){
    return pessoas.sort((pessoa1,pessoa2) => moment(pessoa1.dataNascimento).isAfter(pessoa2.dataNascimento) ? 1 : -1)
  }
  else if(criterio==='nome'){
    return pessoas.sort((pessoa1,pessoa2) => pessoa1.nome > pessoa2.nome ? 1 : -1)
  }
}

// EDIT (PUT)

export const prepareEdition = (pessoa, dispatch) => {
  pessoa.dataNascimento = moment(pessoa.dataNascimento,'YYYY-MM-DD').format('DDMMYYYY');
  dispatch({
    type: 'SET_EDIT',
    edit: {
      status: true,
      pessoa: pessoa
    }
  })  
}


export const cancelEdit = (dispatch) => {
  dispatch({
    type: 'SET_EDIT',
    edit: {
      status: false,
      pessoa: {}
    }
  });
}

export const putPessoa = async (pessoa, id, dispatch) =>{
  console.log('id é: ', id);
  console.log('pessoa é: ', pessoa);
  const {data} = await api.put(`/pessoa/${id}`,pessoa);
  console.log('data no put', data)
  window.location.href = '/pessoa';
}


// DELETE 
export const deletePessoa = async (id, dispatch) => {
  console.log("delete id é: ", id)
  const response = await api.delete(`/pessoa/${id}`);
  if (response) {
    getPessoas(dispatch);
  }else{
    alert('Erro ao deletar')
  }
}

// POST 
export const postPessoa = async (pessoa, dispatch) => {
  const { data } = await api.post('/pessoa', pessoa);
  console.log('data no post é: ', data)
  if(data) getPessoas(dispatch);
  window.location.href='/pessoa';
}