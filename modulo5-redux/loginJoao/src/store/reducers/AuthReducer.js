const INITIAL_STATE = {
  auth: {
    token: '',
    isLogin: false,
    loading: true
  }
}

function authReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_LOGIN') {
    return {
      auth: {
        token: action.token,
        isLogin: action.auth,
        loading: action.loading
      }
    }
  }
  if (action.type === 'SET_IS_LOGIN') {
    return {
      auth: {
        token: action.token,
        isLogin: action.auth,
        loading: action.loading
      }
    }
  }
  return state
}

export default authReducer;