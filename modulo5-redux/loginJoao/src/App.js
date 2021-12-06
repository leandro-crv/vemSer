import Routers from './routers';
import store from './store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { api } from './api';
const App = () => {
  useEffect(()=>{
    if(localStorage.getItem('token')){
      api.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    }
  },[])
  return (
    <div className="App">
      <Provider store={store}>
        <Routers />
      </Provider>
    </div>
  );
}

export default App;