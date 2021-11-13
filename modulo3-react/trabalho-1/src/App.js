import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';


import cogumelo from "./cogumelo.jpeg";
import './App.css';

const mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13818.880335381276!2d-51.1686816!3d-30.0161929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1636496219912!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
const endereco = "Andaraí, 531 - Porto Alegre"
function App() {
  return (
    <div className="App">
      <div clasName='App-container'>
        <Router>
          <Header src={cogumelo} />
          <Routes>
            <Route path="/" element={<Home cogumelo={cogumelo} mapa={mapa} />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer endereco={endereco} />
        </Router>
      </div>

    </div>
  );
}

export default App;
