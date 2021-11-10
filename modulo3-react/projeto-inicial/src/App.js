import './App.css';
import FirstComponent from './components/FirstComponent';
import List from './components/List';
import Personal from './components/Personal';
import SayMyName from './components/SayMyName';
import Form from './components/Form';
import Eventos from './components/Eventos';
import Condicional from './components/Condicional';


function App() {
  function calcular(num){
    return num + 1;
  }

  return (
    <div className="App">
      {/* <Eventos calc={calcular}num={2}/> */}
      {/* <Form/> */}
      {/* <SayMyName calcular={calcular}/> */}
      <Condicional/>
            
    </div>
  );
}

export default App;
