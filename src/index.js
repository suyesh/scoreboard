import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './helpers/registerServiceWorker';

let PLAYERS = [
  {
    name: 'Suyesh Bhandari',
    score: 31,
    id: 1
  },
  {
    name: 'Carlos Castillo',
    score: 10,
    id: 2
  }
]

ReactDOM.render(<App players={PLAYERS}/>, document.getElementById('root'));
registerServiceWorker();
