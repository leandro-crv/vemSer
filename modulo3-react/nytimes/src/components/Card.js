import Moment from 'react-moment';
import noImg from '../no-image-icon.png';
import styles from './Card.module.css';
function Card({title,published_date,byline,abstract,img,newPage}){
  return(
    <div className={!newPage ? styles.card : styles.newPage}>
      <div>
        <img src={!img ? noImg : img} alt={title} className={!newPage ? styles.normalImg : null }/>
      </div>
      <div>
        <h1>{title}</h1>
        <div className={styles.dateEauthor}>
          <span>Published <Moment date={published_date} format="D. MMM, YYYY"/></span>
          {byline ? (<><span>by</span><span className={styles.author}>{byline.substring(2)}</span> </>) :null}
        </div>
        <p>{abstract}</p>
      </div>
    </div>
  );
}

export default Card;