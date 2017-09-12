import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import PlayerReducer from './reducers/player'
import './assets/css/index.css';
import ScoreBoard from './containers/ScoreBoard';
import registerServiceWorker from './helpers/registerServiceWorker';

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <ScoreBoard/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
