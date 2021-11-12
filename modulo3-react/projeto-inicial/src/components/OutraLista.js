function OutraLista({itens}){
  return(
    <>
      <h3>Lista de tecnologias</h3>
      {itens.map(item => (
        <p>{item}</p>
      ))}
    </>
  );
}

export default OutraLista;