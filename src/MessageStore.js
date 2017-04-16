import { observable } from 'mobx';
import _ from 'lodash';


class MessageStore {
  messages = observable([]);

  markMessageAsRead(messageID) {
    let readMessage = _.find(this.messages, message => message.id === messageID);
    if (readMessage) readMessage.read = true;
  }

  addMessage(message) {
    this.messages.push({
      id: message.id,
      type: message.type,
      pic: message.attributes.pic,
      message: message.attributes.message,
      username: _.startCase(message.attributes.username),
      useragent: message.attributes.useragent,
      date: (new Date(message.attributes.date)).toString(),
      read: false,
    });
  }
}

export default new MessageStore();
