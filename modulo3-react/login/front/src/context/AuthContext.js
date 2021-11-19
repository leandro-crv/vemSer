import { createContext, useState } from "react";
import history from "../history";
import api from "../api";

const Context = createContext();

function AuthProvider({children}){
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  async function handleLogin(e){
    const {data: {token}} = await api.post('/authenticate');
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`
    
    history.push('/users');
    
    //history.go();
   
    setAuthenticated(true);
  }
  return(
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  )
}

export {Context, AuthProvider};