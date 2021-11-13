import styles from './Menu.module.css';
import {Link} from 'react-router-dom';

function Menu ({posicao}){
   return(
    <>
     <ul className={posicao ==='horizontal' ? styles.horizontal : styles.vertical}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul> 
    </>
  );
}

export default Menu;