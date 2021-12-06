import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from './Menu.module.css';
import { handleLogout } from "../store/actions/AuthActions";
import { useNavigate } from "react-router";

const Menu = ({auth, dispatch}) =>{
  const navigate = useNavigate();
  
  const handelLogoutBackPage = ()=>{
    handleLogout(dispatch);
    navigate('/login');
  }
  return(
    <nav className={styles.menu}>
      <ul>
        {!auth ? (
          <li>
          <Link to='/login'>Entrar</Link>
        </li>
        ): (
        <>
        <li>
          <Link to='/pessoa'>Pessoa</Link>
        </li>
        <li>
          <Link to='/cadastro'>Cadastro</Link>
        </li>
        <li>
          <Link to='/endereco'>Endereço</Link>
        </li>
        <button onClick={()=> handelLogoutBackPage()} className={styles.btnLogout}>Sair</button>
        </>
        )}
      </ul>
    </nav>
  );
}

// export default Menu;

const mapStateToProps = state => ({
  auth: state.authReducer.auth.isLogin
});

export default connect(mapStateToProps)(Menu)
