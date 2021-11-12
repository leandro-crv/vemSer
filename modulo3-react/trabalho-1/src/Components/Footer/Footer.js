import Menu from "../Menu/Menu";
import styles from "./Footer.module.css"
function Footer ({endereco}){
  return(
    <div className={styles.footer}>
    
      <address>{endereco}</address>
    </div>
  );
}

export default Footer;