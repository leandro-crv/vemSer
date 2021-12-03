const INITIAL_STATE = {
  pessoas: []
}

function pessoaReducer(state = INITIAL_STATE, action) {
  if (action.type === 'GET_PESSOA') {
    return {
      pessoas: action.pessoas
    }
  }
  return state
}

export default pessoaReducer;