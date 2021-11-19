import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Ciencia from "./pages/Ciencia";
import Mundo from "./pages/Mundo";
import Politica from "./pages/Politica";
import Saude from "./pages/Saude";
import Header from "./components/Header";

function Routers() {
  return (
    <BrowserRouter>
      <Header />
      <div className='App-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ciencia' element={<Ciencia />} />
        <Route path='/saude' element={<Saude />} />
        <Route path='/politica' element={<Politica />} />
        <Route path='/mundo' element={<Mundo />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routers;