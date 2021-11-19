import Card from './Card';
import { AiFillCloseCircle } from 'react-icons/ai';
function News({news,setIsOpenNews}) {
  return (
    <div className='App-newsOpen'>
      <AiFillCloseCircle onClick={() => setIsOpenNews(false)}/>
      <Card
        title={news.title}
        published_date={news.published_date}
        byline={news.byline}
        img={news.multimedia !== null ? news.multimedia[0].url : false}
        abstract={news.abstract}
        newPage={true}
      />
    </div>
  )
}

export default News;