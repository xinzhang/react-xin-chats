import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';

import mui from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import RawTheme from './rawTheme.jsx'

import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

@connectToStores
class App extends React.Component {

	static getStores(){
		return [ChatStore];
	}

	static getPropsFromStores() {
		return ChatStore.getState();
	}


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
		var view = ( <Login /> );

		if (this.props.user) {
			view = ( 
				<div>
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
				);			
		}

		return (
 			<div>
		        <AppBar title="XZ - Awesome Chat App" />	
		        {view}
		    </div>		
		)
	}
}

export default App;