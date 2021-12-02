import api from '../../api'
export const handleLogin = async (login)=>{
  const {data} = await api.post('auth',login)
  const auth = data ? true : false;
  const token = data ? data : '';
  
  console.log('auth é', auth, 'token é ',token)
  return{
    type:'SET_AUTH',
    auth,
    token
  }
}

