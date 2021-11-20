import { useContext, useState } from 'react';
import { LoginContext } from '../context/Login';
import {BiUserCircle} from 'react-icons/bi';
function User(){
  const {user,openModalLogin, setOpenModalLogin} = useContext(LoginContext);
  return(
    <div className='App-user'>
      <BiUserCircle onClick={()=> setOpenModalLogin(!openModalLogin)} />
      <div>{user}</div>
    </div>
  );
}

export default User;