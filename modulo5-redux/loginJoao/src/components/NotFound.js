import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import {connect} from 'react-redux';
import { api } from '../api';
import gif404 from '../images/gif404.gif';

const NotFound = ({auth})=>{
  const [timer, setTimer] = useState(7);
  const navigate = useNavigate();


  useEffect(()=>{
    setTimer(timer-1)
    console.log('auth no 404', auth)
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

// export default NotFound;
const mapStateToProps = state => ({
  auth: state.authReducer.auth.isLogin
});

export default connect(mapStateToProps)(NotFound)
