import Menu from "../Menu/Menu";
import styles from "./Header.module.css";
function Header ({src}){
  const itens = [{nome: 'Home',href:'#'},{nome: 'Sobre',href:'#'},{nome: 'Contato',href:'#'}];
  return(
    <div className={styles.header}>
      <div className={styles.logo}>
      <img src={src} alt='cogumelo mario'  className={styles.img}/>
      <small>Melhores alunos do VemSer de todos os tempos</small>
      </div>
      <nav className={styles.nav}>
      <Menu itens={itens} posicao='horizontal'/>
      </nav>
    </div>
  );
}

export default Header;