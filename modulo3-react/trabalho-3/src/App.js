import { useState } from 'react';

import Form from './components/Form/Form';
import List from './components/List/List';

import './App.css';




function App() {

  const [users, setUsers] = useState([]);
  const [idAtual, setIdAtual] = useState(1);
  const valoresPadrao = {
    firstName: '',
    lastName: 'carvalho',
    email: 'leandro@gmail.com',
    address: 'rua felipe de oliveira',
    phone: '51991770315'
  }
  const [valoresIniciais,setValoresIniciais] = useState(valoresPadrao);
  const [emEdicao,setEmEdicao] = useState({status: false, id: 0});
  
  return (
    <div className="App-container">
     <Form setUsers={setUsers} users={users} idAtual={idAtual} setIdAtual={setIdAtual} valoresIniciais={valoresIniciais} setValoresIniciais={setValoresIniciais} emEdicao={emEdicao} setEmEdicao={setEmEdicao} valoresPadrao={valoresPadrao}/>
     <List users={users} setUsers={setUsers} setValoresIniciais={setValoresIniciais} emEdicao={emEdicao} setEmEdicao={setEmEdicao} valoresPadrao={valoresPadrao}/>
    </div>
  );
}

export default App;
