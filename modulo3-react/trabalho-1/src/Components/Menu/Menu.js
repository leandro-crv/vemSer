import styles from './Menu.module.css';
function Menu ({itens,posicao}){
  console.log('itens são',itens)
  return(
    <div className={posicao==='horizontal' ? styles.horizontal : styles.vertical}>
      {itens.map(e => {
        return(
        <a href={e.href}>{e.nome}</a>
        );
      })}
    
    </div>
  );
}

export default Menu;