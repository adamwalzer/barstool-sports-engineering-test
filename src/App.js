import React, { Component } from 'react';
import {observer} from 'mobx-react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import MessageList from './MessageList';
import Message from './Message';

import _ from 'lodash';
import './App.scss';

import messageStore from './MessageStore';

require('isomorphic-fetch');

const DATA_URL = 'http://private-227b9-jsonapifizzbuzz.apiary-mock.com/messages';

const MESSAGE_LIST = () => <MessageList messages={messageStore.messages} />;
const MESSAGE = (props) => <Message {...props} messages={messageStore.messages} />;

const App = observer(class App extends Component {
  componentWillMount() {
    fetch(DATA_URL)
    .then(response => {
      _.invoke(response, 'text').then(text => {
        if (response.status === 200) {
          _.each(JSON.parse(text).data, message => messageStore.addMessage(message));
        } else {
          console.log('Error', text); // eslint-disable-line no-console
        }
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h2>
          Welcome To React.js
        </h2>
        <Router>
          <div>
            <Route exact path="/" component={MESSAGE_LIST} />
            <Route path="/id/*" component={MESSAGE} />
          </div>
        </Router>
      </div>
    );
  }
});

export default App;
