import alt from '../alt/index.jsx';
import Actions from '../actions/index.jsx';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';


@decorate(alt)
class ChatStore {
	constructor() {
		this.state = {user: null};
	}

	@bind(Actions.login)
	login(user) {
		this.setState({user: user});
	}

	@bind(Actions.addMessage)
	addMessage(message) {
		console.log('accept message');
	}
}

export default alt.createStore(ChatStore);