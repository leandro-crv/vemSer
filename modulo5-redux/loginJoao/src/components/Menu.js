import { Link } from "react-router-dom";


import styles from './Menu.module.css';
const Menu = () =>{
  return(
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to='/login'>Entrar</Link>
        </li>
        <li>
          <Link to='/pessoa'>Pessoa</Link>
        </li>
        <li>
          <Link to='/cadastro'>Cadastro</Link>
        </li>
        <li>
          <Link to='/endereco'>Endereço</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;