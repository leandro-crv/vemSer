import Menu from "../Menu/Menu";
import styles from "./Footer.module.css"
function Footer ({endereco}){
  return(
    <div className={styles.footer}>
      <Menu posicao='vertical'/>
      <address>{endereco}</address>
    </div>
  );
}

export default Footer;