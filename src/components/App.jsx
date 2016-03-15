import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

import mui from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import RawTheme from './rawTheme.jsx'

var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

class App extends React.Component {

	static bar = 43;

	static childContextTypes = {
    	muiTheme: React.PropTypes.object,
  	};

	constructor(){
		super();

		this.state = {
			messages : [
			'Hello, there. How are you?',
			'I am fine, and you?'
			]
		};
	};

	getChildContext(){
	    return {
	      	muiTheme: ThemeManager.getMuiTheme(RawTheme)
	    };
	}

	render(){
		var messageNodes = this.state.messages.map( (message) => {
			return (
				<div>{message}</div>
			);
		});

		return (
 			<div>
		        <AppBar title="Awesome Chat App" />
		        <div style={{
		          display: 'flex',
		          flexFlow: 'row wrap',
		          maxWidth: 1200,
		          width: '100%',
		          margin: '30px auto 30px'
		        }}>
		        	<ChannelList />
		        	<MessageList />
		        </div>
		        <MessageBox />
		    </div>		
		)
	}
}

export default App;