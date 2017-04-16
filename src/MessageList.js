import React, { Component } from 'react';
import {observer} from 'mobx-react';

import {
  Link,
} from 'react-router-dom';

import _ from 'lodash';
import classnames from 'classnames';

const MessageList = observer(class MessageList extends Component {
  renderMessages() {
    return _.map(this.props.messages, (message, key) =>
      <Link
        to={`/id/${message.id}`}
        className={classnames('message', {
          read: message.read,
        })}
        key={key}
      >
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
      </Link>
    );
  }

  render() {
    return (
      <div className="messages">
        {this.renderMessages()}
      </div>
    );
  }
});

export default MessageList;
