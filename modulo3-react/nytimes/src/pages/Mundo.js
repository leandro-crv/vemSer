import {useContext, useEffect, useState} from 'react';
import {Context} from '../context/Context';

function Mundo(){
  const {getNews, Card, setSubject} = useContext(Context);
  const [news,setNews] = useState([]);
   
  useEffect(()=>{
    (async  () => {
      setNews(await getNews('world'));
      setSubject('world');
    })();  

  },[])


  
  
  return(
    <>
      <p>Mundo</p>
      <ul>
      {news.map((n,index) =>(
        
        <li key={index}>
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
    </>
  );
}

export default Mundo;