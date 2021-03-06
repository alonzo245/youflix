import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

// import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//import reducers
import videoBuilderReducer from './store/reducers/videoBuilder';
import appReducer from './store/reducers/app';
import authReducer from './store/reducers/auth';

//redux debugging
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

// get reducers
const rooteReducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  videoBuilder: videoBuilderReducer
})

// init a store
const store = createStore(rooteReducers, composeEnhancers(
  // for async calls
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
