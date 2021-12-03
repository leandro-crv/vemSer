import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <small> &copy; DBC Company </small>
      </div>
    </footer>
  );
}
export default Footer;