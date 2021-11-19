import Moment from 'react-moment';
import noImg from '../no-image-icon.png';
import styles from './Card.module.css';
function Card({title,published_date,byline,abstract,img}){
  return(
    <div className={styles.card}>
      <div>
        <img src={!img ? noImg : img} alt={title} width='200px'/>
      </div>
      <div>
        <h1>{title}</h1>
        <div className={styles.dateEauthor}>
          <span>Published <Moment date={published_date} format="D. MMM, YYYY"/></span>
          <span>by</span><span>{byline.substring(2)}</span>
        </div>
        <p>{abstract}</p>
      </div>
    </div>
  );
}

export default Card;