import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import {MdError} from 'react-icons/md';
import loading from '../loading.gif';

const Context = createContext();

function ContextProvider({children}) {
  const [subject, setSubject] = useState('home');
  const erro = 'Erro no servidor. Contate o administrador do sistema.';
  
  async function getNews(subject) {
      try{
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${subject}.json?api-key=IpOG848IcZsSgESNzLUYh8LlTIklgEO4`);
        console.log(response.data.results)
        return response.data.results;
      }
      catch(error){
        return erro;
      }

    };
  
  return (
    <Context.Provider value={{
      getNews,
      Card,
      subject,
      setSubject,
      MdError,
      loading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };