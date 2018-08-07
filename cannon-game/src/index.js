import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reducer from './reducers';
import Game from './containers/Game';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)


ReactDOM.render(
  <Provider store={store}>
  <Game />
  </Provider>, 
  document.getElementById('root')
  );

registerServiceWorker();
