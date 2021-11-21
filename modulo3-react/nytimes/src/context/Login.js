import { createContext, useEffect, useState } from "react";
import database from '../database/users.json';

const LoginContext = createContext();
function LoginProvider({children}){
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');
  const [openModalLogin, setOpenModalLogin] = useState(false);
  
  // Quando a página é carregada a primeira vez verifica se tem usuário no localstorage
  useEffect(()=>{
    const userLogin = localStorage.getItem("user");
    if(userLogin===null){
      setLogin(false);
      setUser('');
    }
    else{
      setLogin(true);
      setUser(user);
     
    }
  },[]);

 

  function handleLogin(action){
    if(action==='login'){
      console.log('user no handlelogin',user)
      setLogin(true);
      localStorage.setItem("user", user);
      setOpenModalLogin(false);
    }
    else{
      localStorage.removeItem("user");
      setUser('');
      setLogin(false);
      setOpenModalLogin(false);
    }
  }

  function verifyLogin(userParameter, passwordParameter){
    const login =  database.find(element => element.user===userParameter && element.password===passwordParameter)!==undefined;
    if(login){
      console.log('userParameter',userParameter)
      setUser(userParameter);
      handleLogin('login');
    }
    else{
      return 'Usuário não encontrado ou senha inválida';
    }
  }

  return(
    <LoginContext.Provider
      value={{
        login,
        user,
        verifyLogin,
        handleLogin,
        openModalLogin,
        setOpenModalLogin
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export {LoginContext, LoginProvider};