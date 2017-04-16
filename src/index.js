import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import messageStore from './MessageStore';
import './index.scss';

ReactDOM.render(
  <App messages={messageStore.messages} />,
  document.getElementById('root')
);
