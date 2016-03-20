import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

import Firebase from 'firebase';
import _ from 'lodash';

var {Card, List} = mui;

import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.jsx';

class MessageList extends React.Component {

  static getStores(){
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  componentDidMount() {
    ChatStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ChatStore.unlisten(this.onChange);
  }

  onChange(state) {
    console.log(state);
  }  

  constructor(props){
    super(props);
    this.state = {
      messages: {}
    };

    this.firebaseRef = new Firebase('https://xz-chatlist.firebaseio.com/messages');
    this.firebaseRef.on("child_added", (msg) => {
        console.log(msg.val());
        console.log(msg.key());
        if(this.state.messages[msg.key()]){
            return;
        }

      let msgVal = msg.val();
      msgVal.key = msg.key();
      this.state.messages[msgVal.key] = msgVal;

      this.setState({messages: this.state.messages});

    });

    this.firebaseRef.on("child_removed", (msg)=> {
      var key = msg.key();
      delete this.state.messages[key];
      this.setState({messages: this.state.messages});
    });

  }

  render(){
    var messageNodes = _.values(this.state.messages).map((message)=> {
      return (
        <Message message={message.message} />
      );
    });

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
