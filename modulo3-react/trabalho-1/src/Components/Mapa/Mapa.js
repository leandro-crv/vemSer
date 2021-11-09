function Mapa ({link,nome}){
  return(
    <div>
      <h4>{nome}</h4>    
      <div dangerouslySetInnerHTML={ {__html:  link}} />
    </div>
  );
}

export default Mapa;