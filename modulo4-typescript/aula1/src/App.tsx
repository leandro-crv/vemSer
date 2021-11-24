import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';

interface Istate {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<Istate['people']>([]);

  useEffect(() => {
    setPeople([
      {
        name: 'tiago',
        age: 20,
        url: ''
      },
      {
        name:'joaozinho',
        age:18,
        url:'http://google.com',
        note: 'teste note'
      }
    ])
  }, [])

  return (
    <div className="App">
      <h1>A Melhor Turma VemSer DBC</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
