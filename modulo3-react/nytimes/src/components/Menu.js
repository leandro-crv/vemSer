import {Link} from 'react-router-dom';
import styles from './Menu.module.css'
function Menu(){
  return(
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/ciencia'>Ciencia</Link>
        </li>
        <li>
          <Link to='/mundo'>Mundo</Link>
        </li>
        <li>
          <Link to='/politica'>Politica</Link>
        </li>
        <li>
          <Link to='/saude'>Saude</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;