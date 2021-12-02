import './App.css';
import Sidebar from './components/Sidebar';
import Video from './components/Video';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className='container'>
          <div className='container-content'>
          <Video />
          <Sidebar />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
