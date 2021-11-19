import './App.css';
import Routers from './routers';
import { ContextProvider } from './context/Context';


function App() {
  return (
    <ContextProvider>
      <Routers/>
    </ContextProvider>
      
  );
}

export default App;
