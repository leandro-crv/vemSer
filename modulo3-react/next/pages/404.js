import Image from "next/image";
import notFound from "./images/404.gif";
import Router from 'next/router';
import {useEffect} from 'react'
function Page404(){
  
  useEffect(() => {
    setTimeout(()=>{
      Router.push('/')
    },3000)    
  },[]);
  return(
    <Image
    src={notFound}
    alt="My Image"
    width={500}
    height={500}   
  />
  );
}

export default Page404;