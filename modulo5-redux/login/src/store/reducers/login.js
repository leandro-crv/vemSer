const INITIAL_STATE = {
  auth: false,
  token:'',
  loading:false
}

function loginReducer(state = INITIAL_STATE, action){
  console.log('action é: ',action)
  if(action.type==='SET_AUTH'){
    return {
      ...state,
      auth:action.auth,
      token: action.token
    }
  }
  return state
}

export default loginReducer;