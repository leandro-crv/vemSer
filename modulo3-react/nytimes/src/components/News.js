import Card from './Card';
import { AiFillCloseCircle } from 'react-icons/ai';
function News({news,setIsOpenNews}) {
  return (
    <div className='App-newsOpen'>
      <AiFillCloseCircle onClick={() => setIsOpenNews(false)}/>
      <Card info={news} newPage={true} />
    </div>
  )
}

export default News;