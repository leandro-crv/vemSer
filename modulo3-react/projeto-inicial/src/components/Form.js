import { useState } from 'react';
function Form(){
  function CadastraUsuario(e){
    e.preventDefault();
    console.log(nome)
  }
  
  const [nome, setNome] = useState('joãozinho');
  const [listUser, setListUser] = useState(['João','Tiago'])
 
  return(
    <>
      <h1>Meu Cadastro</h1>
      <form onSubmit={CadastraUsuario}>
        <div>
          <input onChange={(e)=> setNome(e.target.value)} type='text' placeholder="Digite o seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar"/>
        </div>
      </form>
      <div>
          {listUser.map(user => (
            <p>{user}</p>
          ))}
      </div>
    </>
  );
}

export default Form;