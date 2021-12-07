import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pessoa from "./pages/Pessoa";
import Cadastro from "./pages/Cadastro";
import Endereco from "./pages/Endereco";
import NotFound from './components/NotFound'
import { useEffect, useState } from "react";
import {isLogin} from './store/actions/AuthActions'
import { api } from "./api";
import {connect} from 'react-redux';
import Loading from "./components/Loading";

function Routers({auth,dispatch}) {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      api.defaults.headers.common['Authorization'] = token;
      isLogin(dispatch,token);
    }
    setLoading(false);
  },[]);
  
  if (loading) {
    return <Loading/>;
  }

  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          {auth.isLogin ? (
            <>
            <Route path="/pessoa" element={<Pessoa />} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/endereco" element={<Endereco/>} />
            </>
          ): (
            <Route path="/login" element={<Login />} />
          )}         
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  )
}


const mapStateToProps = state => ({
  auth: state.authReducer.auth
});

export default connect(mapStateToProps)(Routers)

