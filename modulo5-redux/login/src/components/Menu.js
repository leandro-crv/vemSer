import { Link } from "react-router-dom";


import styles from './Menu.module.css';
const Menu = () =>{
  return(
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to='/login'>Entrar</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;