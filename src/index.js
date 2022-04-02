import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const userName = 'Реакт ибн Фейсбук';
const greeting = 'Добро пожаловать';
const greetStyle = 'greet-red';

ReactDOM.render(
  <React.StrictMode>
    <App userName = { userName } greeting={ greeting } greetClass={ greetStyle }/>
  </React.StrictMode>,
  document.getElementById('root')
);
