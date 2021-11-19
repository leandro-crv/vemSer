import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Science from "./pages/Science";
import World from "./pages/World";
import Politics from "./pages/Politics";
import Health from "./pages/Health";
import Header from "./components/Header";

function Routers() {
  return (
    <BrowserRouter>
      <Header />
      <div className='App-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/science' element={<Science />} />
        <Route path='/health' element={<Health />} />
        <Route path='/politics' element={<Politics />} />
        <Route path='/world' element={<World />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routers;