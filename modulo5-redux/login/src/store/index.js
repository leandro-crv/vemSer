import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk" ;

import rootReducer from './reducers';
// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;

// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducers'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// // The store now has the ability to accept thunk functions in `dispatch`
// const store = createStore(rootReducer, composedEnhancer)
// export default store
