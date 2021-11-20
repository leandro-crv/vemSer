import './App.css';
import Routers from './routers';
import { ContextProvider } from './context/Context';
import { LoginProvider } from './context/Login';


function App() {
  return (
    <LoginProvider>
      <ContextProvider>
        <Routers />
      </ContextProvider>
    </LoginProvider>
  );
}

export default App;
