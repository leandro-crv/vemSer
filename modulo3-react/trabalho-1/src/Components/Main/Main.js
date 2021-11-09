import Cogumelo from "../Cogumelo/Cogumelo";
import styles from "./Main.module.css";

function Main ({src}){
  return(
    <div>
      <h1 className={styles.titulo}>Estamos aprendendo HTML e CSS com o melhor professor de todos</h1>
      <div className={styles.listaCogumelos}>
      <Cogumelo src={src} nome="Cogumelo 1" width='180px' key='1'/>
      <Cogumelo src={src} nome="Cogumelo 2" width='180px' key='2'/>
      <Cogumelo src={src} nome="Cogumelo 3" width='180px'key='3'/>
      </div>
    </div>
  );
}

export default Main;