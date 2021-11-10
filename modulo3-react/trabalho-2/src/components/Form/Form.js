import { useState } from 'react';
import Card from '../Card/Card';
import styles from './Form.module.css';
function Form(){

  function validarCadastro(e){
    e.preventDefault();
    if(nome.length && email.length && profissao.length){
      setCadastroValido(true);
      setListaUsuarios([...listaUsuarios,{nome: nome, email: email, profissao: profissao}]);
       limparCampos();
    }
    else{
      setCadastroValido(false);
    }
   
  }
  
  function limparCampos(){
    [setNome,setEmail,setProfissao].forEach(e => e(''));
  }

  function excluir(id){
    setListaUsuarios(listaUsuarios.filter((element,index)=> index !==id));
  }
  const [cadastroValido,setCadastroValido] = useState(true);
  const [nome, setNome] = useState();
  const [email,setEmail] = useState();
  const [profissao,setProfissao] = useState();
  const [listaUsuarios, setListaUsuarios] = useState([]);

  return(
    <div className={styles.container}>
    <h1>Trabalhadores</h1>
    <form className={styles.form}>
        <input type='text' placeholder='Digite o nome completo' value={nome} onChange={(e) => setNome(e.target.value)}/>
        <input type='email' placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='text' placeholder='Digite sua profissão' value={profissao} onChange={(e) => setProfissao(e.target.value)} />
    </form>
    <button type='submit' onClick={validarCadastro}>Adicionar Usuário</button>
    {!cadastroValido && (
      <p>Cadastro inválido. Verifique os campos acima!</p>
    )}
    <ul className={styles.listaUsuarios}>
      {listaUsuarios.map((usuario,index) => 
        (
          <li className={styles.usuario}>          
            <button id={index} onClick={()=> excluir(index)} className={styles.excluir}>X</button>
            <Card nome={usuario.nome} email={usuario.email} profissao={usuario.profissao} />
          </li>
        )
      )}
    </ul>
    </div>
  );
}

export default Form;