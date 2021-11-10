import PropTypes from 'prop-types';
import styles from './Card.module.css'

function Card ({nome,email,profissao}){
  return(
    <div className={styles.card}>
      <div>Usuário: {nome} </div>
      <div>E-mail: {email}</div>
      <div>Profissão: {profissao}</div>
    </div>
  );

}

Card.propTypes = {
  nome: PropTypes.string,
  email: PropTypes.string,
  profissao: PropTypes.string
}

export default Card;