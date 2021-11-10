import { useState } from "react";
function Condicional(){
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();
  function enviarEmail(e){
    e.preventDefault();
    console.log('email:',email)
  }
  
  const nome="";
  return(
    <>
      <h2>Cadastre seu email</h2>
      <fomr>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email"/>
        <button onClick={enviarEmail} type="submit">Enviar e-mail</button>
      </fomr>
      {/* verifica se nome existe. Se sim, retorna o email */}
      {nome && (
        <div>
          <p>{email}</p>
        </div>
      )}
    </>
  );


}


export default Condicional;