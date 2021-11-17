import './App.css';
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";
import Name from "./components/Name";

import CountProvider from "./context/Count";
import NameProvider from "./context/Name";

function App() {
  return (
    <div className="App">
      <div className="App-container">
      <CountProvider>
        <Counter/>
        <hr />
        <Mirror/>
      </CountProvider>
        <hr />
      <NameProvider>
        <Name/>
      </NameProvider>
      </div>
    </div>
  );
}

export default App;
