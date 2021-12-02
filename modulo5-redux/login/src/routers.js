import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./pages/Login";

const Routers = () => {

  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default Routers;