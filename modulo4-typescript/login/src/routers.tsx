import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { PessoaProvider } from "./context/PessoaContext";
import Login from './pages/Login';
import Pessoa from "./pages/Pessoa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import {Cadastro} from "./pages/Cadastro";
import NotFound from "./components/NotFound";
import Endereco from './pages/Endereco';

const Routers = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setIsLogin(true);
    }
  },[]);
  return (
    <BrowserRouter>
      <AuthProvider>
        <PessoaProvider>
        <Header />
        <div className='container'>
          <Routes>
            {isLogin ? (
              <>
               <Route path='/' element={<Home/>}/>
               <Route path="/login" element={<Login />} />
               <Route path="/pessoa" element={<Pessoa />} />
               <Route path="/cadastro" element={<Cadastro />} />
               <Route path="/endereco" element={<Endereco />} />
               <Route path="*" element={<NotFound/>}/>
               </>
            ): (
              <>
              <Route path='/' element={<Home/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound/>}/>
              </>
            )}
           
          </Routes>
        </div>
        <Footer />
        </PessoaProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default Routers;