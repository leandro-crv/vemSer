import styles from './Header.module.css';
import cogumelo from '../images/cogumelo.jpeg';
import Menu from './Menu';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <a href='/'><img src={cogumelo} alt='cogumelo' className={styles.imgCogumelo} /></a>
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
export default Header;