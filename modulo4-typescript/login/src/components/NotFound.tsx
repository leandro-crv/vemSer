import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import gif404 from '../images/gif404.gif';

const NotFound = ()=>{
  const navigate = useNavigate();
  const {auth} = useContext<any>(AuthContext);

  useEffect(()=>{
    setTimeout(() => {
      auth ? navigate('/pessoa') : navigate('/login');
    }, 2000);
  },[])
  return(
    <div className='notFound'>
      <h3>404 - Página não encontrada</h3>
      <img src={gif404} alt='gif404' width='600px'/>
    </div>
    
  );
}

export default NotFound;