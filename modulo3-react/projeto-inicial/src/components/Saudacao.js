function Saudacao({nome}){
  return(
    <>
    {nome && (
      <p>Olá {nome}</p>
    )}
    </>
  );
}

export default Saudacao;