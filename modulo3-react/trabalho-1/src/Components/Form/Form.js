import { useState } from 'react';
import styles from'./Form.module.css';

function Form(){
  function enviar(e){
    e.preventDefault();  
    console.log(nome,email,mensagem,select)
  }
  
  const [nome,setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem,setMensagem] = useState('');
  const [select, setSelect] = useState();
  
  return(
    <>
      <h1>Formulário</h1>
      <form className={styles.form}>
      <input type="text" placeholder="Digite seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <input type="email" placeholder="Insira seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label>Qual motivo do contato</label>
      <select value={select} onChange={(e)=> setSelect(e.target.value)}>
        <option value='HTML'>HTML é easy demais</option>
        <option value='CSS'>CSS é easy demais</option>
        <option value='JS'>JS é easy demais</option>
      </select>
      <label>Deixe sua mensagem</label>
      <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
      <button type='submit' onClick={(e) => enviar(e)}>Enviar</button>
      </form>
    </>
  );
}

export default Form;