import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MessageList from './MessageList';
import messageStore from './MessageStore';

const MESSAGE_LIST = () => <MessageList messages={messageStore.messages} />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  const router = (
    <Router>
      <Route path="/" component={MESSAGE_LIST} />
    </Router>
  );
  ReactDOM.render(router, div);
});
