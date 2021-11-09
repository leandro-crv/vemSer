import Menu from "../Menu/Menu";
import styles from "./Footer.module.css"
function Footer ({endereco}){
  const itens = [{nome: 'Home',href:'#'},{nome: 'Sobre',href:'#'},{nome: 'Contato',href:'#'}];
  return(
    <div className={styles.footer}>
      <Menu itens={itens} posicao='vertical'/>
      <address>{endereco}</address>
    </div>
  );
}

export default Footer;