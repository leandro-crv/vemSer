import { useContext, useState } from "react";
import { LoginContext } from "../context/Login";


function Login(){
  const {verifyLogin, handleLogin, login, openModalLogin, errorLogin, msgErrorLogin} = useContext(LoginContext);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return(
    <>
    {openModalLogin ? (
      <div className='modalLogin'>
      <div>
        <input type='text' onChange={(e)=> setUser(e.target.value)} value={user} placeholder='User' />
      </div>
      <div>
        <input type='password' onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Password'/>
      </div>
      {!login ? 
        (<button type='submit' onClick={() => verifyLogin(user,password)}>Login</button>)
        :
        (<button type='submit' onClick={()=> handleLogin('logout')}>Logout</button>)  
      }
      {errorLogin ? (
        <span>{msgErrorLogin}</span>
      ):null}
    </div>
    ):null}
    </>

  );
}

export default Login;