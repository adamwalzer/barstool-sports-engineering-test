import React, { Component } from 'react';
import {observer} from 'mobx-react';
import messageStore from './MessageStore';

import {
  Link,
} from 'react-router-dom';

import _ from 'lodash';

const Message = observer(class Message extends Component {
  renderMessage() {
    let message = _.find(this.props.messages, m => m.id === this.props.match.params[0]);

    if (!message) return null;

    messageStore.markMessageAsRead(message.id);

    return (
      <div className="message read">
        <div className="image-wrapper">
          <img src={message.pic} />
        </div>
        <div className="message-body">
          <p className="message-copy">
            {message.message}
          </p>
          <p className="username">
            {message.username}
          </p>
          <p className="useragent">
            {message.useragent}
          </p>
          <p className="date">
            {message.date}
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        className="detail-page"
      >
        <Link to="/">back</Link>
        {this.renderMessage()}
      </div>
    );
  }
});

export default Message;
