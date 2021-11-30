import React, { useState, useEffect, createContext } from 'react';
import api from '../api';
import {LoginDTO} from '../model/LoginDTO';
import { useNavigate } from 'react-router';
import Loading from '../components/Loading';


const AuthContext = createContext({});

const AuthProvider: React.FC<any> = ({children}) =>{
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      api.defaults.headers.common['Authorization'] = token;
      setAuth(true);
    }
    setLoading(false);
  },[])
  
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleLogin = async (login: LoginDTO) => {
    (async ()=>{
      console.log('login no handleLogin',login)
      const {data} = await api.post('auth',login)
      localStorage.setItem('token',data);
      api.defaults.headers.common['Authorization'] = data;
      // navigate('/pessoa');
      window.location.href='/pessoa'
      setAuth(true);
    })()
  }

  const handleLogout = () =>{
    // quando navigate tiver funcionando tem que usar o removeItem
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization'] = '';
    window.location.href = '/login';
    // navigate('/login');
    setAuth(false);
  }

  if(loading){
    return(<Loading/>)
  }
  return(
    <AuthContext.Provider value={{
      handleLogin,
      handleLogout,
      auth,
      setAuth,
      loading,
      setLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};