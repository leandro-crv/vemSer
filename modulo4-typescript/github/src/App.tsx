import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

interface Istate {
  info: {
    name: string,
    bio:string,
    login: string,
    avatarUrl: string,
    htmlUrl: string,
    reposUrl: string,
    createAt: string,
    followers: number,
    email?: string
  },
  repositorios:{
    name:string,
    url:string,
    updated:string
  }[]

}

function App() {
  const [info, setInfo] = useState<Istate['info']>({
    name:'',
    bio:'',
    login:'',
    avatarUrl:'',
    htmlUrl:'',
    reposUrl:'',
    createAt:'',
    followers:0,
  });
  const [repositorios, setRepositorios] = useState<Istate['repositorios']>([{
    name:'',
    url:'',
    updated:''
  }])

 
  const url = 'https://api.github.com/users/leandro-crv'
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);
       
        setInfo({
          name:data.name,
          bio:data.bio,
          login: data.login,
          avatarUrl: data.avatar_url,
          htmlUrl:data.html_url,
          reposUrl:data.repos_url,
          createAt:data.created_at,
          followers:data.followers,
          email:data.email
        });
        
      }
      catch(error){
        console.log(error)
      }
      
    })()
  },[])

  useEffect(()=>{
    (async ()=>{
      try{
        const {data} = await axios.get('https://api.github.com/users/leandro-crv/repos');
        console.log("data no useEffect",data)
        let array:any = [];
        data.map((element:any) => {
          (
          array.push({
            name: element.name,
            url: element.html_url,
            updated:element.updated_at
          })
        )});
        console.log('array é:',array)
        setRepositorios(array);
      }
      catch(error){
        console.log(error)
      }
    })()
  },[])

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Card info={info} repositorios={repositorios}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
