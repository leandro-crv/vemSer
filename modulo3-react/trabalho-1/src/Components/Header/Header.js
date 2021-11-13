import Menu from "../Menu/Menu";
import styles from "./Header.module.css";
function Header ({src}){
  return(
    <div className={styles.header}>
      <div className={styles.logo}>
      <img src={src} alt='cogumelo mario'  className={styles.img}/>
      <small>Melhores alunos do VemSer de todos os tempos</small>
      </div>
      <nav className={styles.nav}>
      <Menu  posicao='horizontal'/>
      </nav>
    </div>
  );
}

export default Header;