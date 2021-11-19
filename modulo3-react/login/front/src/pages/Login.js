import {useContext} from 'react';
import { Context } from '../context/AuthContext';

function Login(){
  const {authenticated, handleLogin} = useContext(Context);
  return(
    <>
      <button onClick={handleLogin}>Entrar</button>
      
    </>
  );
}

export default Login;