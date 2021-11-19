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
          <Link to='/science'>Science</Link>
        </li>
        <li>
          <Link to='/world'>World</Link>
        </li>
        <li>
          <Link to='/politics'>Politics</Link>
        </li>
        <li>
          <Link to='/health'>Health</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;