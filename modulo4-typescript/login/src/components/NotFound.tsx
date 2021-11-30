import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import gif404 from '../images/gif404.gif';

const NotFound = ()=>{
  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();
  const {auth} = useContext<any>(AuthContext);

  useEffect(()=>{
    setTimer(timer-1)
  },[]);

  useEffect(()=>{
    if(timer===0){
      auth ? navigate('/pessoa') : navigate('/login');
    }
    else{
      setTimeout(()=>{
        setTimer(timer-1);
      },1000)
    }
  },[timer])

  return(
    <div className='notFound'>
      <h3>404 - Página não encontrada</h3>
      <img src={gif404} alt='gif404' width='600px'/>
      <div>Você será redirecionado em <strong>{timer}</strong> segundos</div>
    </div>
    
  );
}

export default NotFound;