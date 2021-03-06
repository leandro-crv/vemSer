const INITIAL_STATE = {
  auth: {
    token: '',
    isLogin: false,
  }
}

function authReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_LOGIN') {
    return {
      auth: {
        token: action.token,
        isLogin: action.auth,
      }
    }
  }
  if (action.type === 'SET_IS_LOGIN') {
    return {
      auth: {
        token: action.token,
        isLogin: action.auth,
      }
    }
  }
  return state
}

export default authReducer;