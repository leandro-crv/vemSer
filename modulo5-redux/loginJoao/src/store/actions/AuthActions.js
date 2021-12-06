import { api } from "../../api";

export const isLogin = (dispatch,token) =>{
  const logado = {
    type: 'SET_IS_LOGIN',
    token: token,
    auth: true,
    loading: false
  }
  dispatch(logado);
}

export const handleLogin = async(values, dispatch) => {
  const {data} = await api.post('/auth', values);
  if (data) {
    localStorage.setItem('token', data);
    const logado = {
      type: 'SET_LOGIN',
      token: data,
      auth: true,
      loading: false
    }
    api.defaults.headers.common['Authorization'] = data;
    window.location.href='/pessoa';
    dispatch(logado);
  } else {
    alert('Deu erro no login');
  }
}

export const handleLogout = (dispatch)=>{
  localStorage.removeItem('token');
  dispatch({
    type:'SET_LOGIN',
    token:'',
    auth:false,
    loading:false
  })
}