import {useContext, useEffect, useState} from 'react';
import {Context} from '../context/Context';
import { LoginContext } from '../context/Login';
import News from '../components/News';

function Politics(){
  const {getNews, Card, setSubject, MdError,loading} = useContext(Context);
  const {login,setOpenModalLogin} = useContext(LoginContext);

  const [news,setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenNews, setIsOpenNews] = useState(false);
  const [openNews, setOpenNews] = useState('');
  
  const handleOpenNews = (id) => {
    let element = news[id];
    setNews([]);
    setOpenNews(element);
    setIsOpenNews(true); 
  }
  

  useEffect(()=>{
    (async  () => {
      if(!isOpenNews){
        setIsLoading(true);
        setNews(await getNews('politics'));
        setSubject('politics');
        setIsLoading(false);
      }
    })();  

  },[isOpenNews])

  useEffect(()=>{
    (async ()=>{
      setNews(await getNews('politics'));
    })();
  },[login])
  
  return(
    <div >
      {isLoading? (
        <div className='App-loading'>
          <img src={loading} alt='loading'/>
        </div>
      ):null}
      {typeof news==='string' ? (
        <div className='App-erro-api'>
          <MdError/>
          {news}
        </div>
      ):(
        <ul>
      {news.map((n,index) =>(
        
        <li key={index} id={index} onClick={()=> handleOpenNews(index)}>
          {n.title ? (
             <Card
             title={n.title}
             published_date={n.published_date}
             byline={n.byline}
             img={n.multimedia !==null ? n.multimedia[0].url : false}
             abstract={n.abstract}
            
           />
          ):null}
       
         </li>
      ))}
        
      </ul>
      )}
      {!login && !isOpenNews? 
      (<span onClick={()=> setOpenModalLogin(true)} className='App-linkLogin'>Para ler mais, faça login</span>)
    :null}
      {isOpenNews ? (
        <News news={openNews} setIsOpenNews={setIsOpenNews} />
      ):null}
      
    </div>
  );
}

export default Politics;