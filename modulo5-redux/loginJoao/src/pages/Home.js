import React from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import cogumelo from '../images/cogumelo.jpeg'

function Home({isLogin}) {
  const navigate = useNavigate();
  const goToLogin = ()=>{
    navigate('/login');
  }
  return (
    <div className='home'>
      <img src={cogumelo} alt='cogumelo' />
      {!isLogin ? (
        <span>Para acessar o conteúdo da página faça <span className='linkFalso' onClick={()=> goToLogin()}>login</span></span>
      ):null}
    </div>
  )
}

const mapStateToProps = state => ({
  isLogin: state.authReducer.auth.isLogin,
})


export default connect(mapStateToProps) (Home);