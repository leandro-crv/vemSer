import Moment from 'react-moment';
import noImg from '../no-image-icon.png';
import styles from './Card.module.css';
function Card({newPage, info}){
  return(
    <div className={!newPage ? styles.card : styles.newPage}>
      <div>
        {info.multimedia !==null ? (
          <img src={info.multimedia[0].url} alt={info.title} className={!newPage ? styles.normalImg : null }/>
        ):
        (<img src={noImg} alt={info.title} className={!newPage ? styles.normalImg : null }/>)
        }
      </div>
      <div>
        <h1>{info.title}</h1>
        <div className={styles.dateEauthor}>
          <span>Published <Moment date={info.published_date} format="D. MMM, YYYY"/></span>
          {info.byline ? (<><span>by</span><span className={styles.author}>{info.byline.substring(2)}</span> </>) :null}
        </div>
        <p>{info.abstract}</p>
      </div>
    </div>
  );
}

export default Card;