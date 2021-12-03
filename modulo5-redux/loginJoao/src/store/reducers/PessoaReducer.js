const INITIAL_STATE = {
  pessoas: [],
  edit: {
    status: false,
    pessoa:{}
  }
}

function pessoaReducer(state = INITIAL_STATE, action) {
  if (action.type === 'GET_PESSOAS') {
    console.log('action no pessoas é: ', action)
    return {
      ...state,
      pessoas: action.pessoas 
    }
  }

  if(action.type==='SET_EDIT'){
    return{
      ...state,
      edit:{
        status: action.edit.status,
        pessoa: action.edit.pessoa
      }
    }
  }


  return state
}

export default pessoaReducer;