import { useContext } from "react";
import { NameContext } from "../context/Name";

function Name(){
  const {name,setName} = useContext(NameContext);

  return(
    <>
      <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Digite um nome"/>
      <br/>
      <span>{name}</span>
      {!name.length ? (<span>Nenhum nome digitado ainda.</span>): null}
    </>
  );
}

export default Name;