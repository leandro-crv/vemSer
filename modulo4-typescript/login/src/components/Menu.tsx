import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from './Menu.module.css';
const Menu = () =>{
  const {auth,handleLogout} = useContext<any>(AuthContext);
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
          <Link to='/endereco'>Endereço</Link>
        </li>
        <li>
          {auth && (
            <button onClick={handleLogout} className={styles.btnLogout}>Sair</button>
          )}
        </li>
      </ul>
    </nav>
  );
}
export default Menu;