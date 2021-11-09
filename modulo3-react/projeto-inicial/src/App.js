import './App.css';
import FirstComponent from './components/FirstComponent';
import List from './components/List';
import Personal from './components/Personal';
import SayMyName from './components/SayMyName';


function App() {
  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
     
      <SayMyName name="Tiago"/>
      <List />
     
            
    </div>
  );
}

export default App;
