import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";



const Context = createContext();

function ContextProvider({children}) {
  const [subject, setSubject] = useState('home');

  async function getNews(subject) {
      const { data: { results } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${subject}.json?api-key=IpOG848IcZsSgESNzLUYh8LlTIklgEO4`);
      console.log('subject é: ', subject)
      console.log('data é:', results)
      return results;
    };
  
  return (
    <Context.Provider value={{
      getNews,
      Card,
      subject,
      setSubject,
     
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };