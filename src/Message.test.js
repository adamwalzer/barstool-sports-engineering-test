import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Message from './Message';
import messageStore from './MessageStore';

const MESSAGE = (props) => <Message {...props} messages={messageStore.messages} />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  const router = (
    <Router>
      <Route path="/" component={MESSAGE} />
    </Router>
  );
  ReactDOM.render(router, div);
});
