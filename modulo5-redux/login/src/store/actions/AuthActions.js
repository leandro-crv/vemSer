import  api  from "../../api";
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
    dispatch(logado);
      window.location.href='/pessoa'
   
  } else {
    alert('Deu erro no login');
  }
}