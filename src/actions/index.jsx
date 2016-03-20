import alt from '../alt/index.jsx';
import Firebase from 'firebase';

class Actions {

	login(args){
		return (dispatch) => {
			var firebaseRef = new Firebase('https://xz-chatlist.firebaseio.com');
			firebaseRef.authWithOAuthPopup("google", (error, user) => {
				if (error) {
					return;
				}

				dispatch(user);
			});
						
		}
	}

	addMessage(message){
		return (dispatch) => {
			console.log('addmessage comes to action');
			var firebaseRef = new Firebase("https://xz-chatlist.firebaseio.com/messages");
			firebaseRef.push({
      			message: message
      		});

			dispatch(message);
		}
	}
}

export default alt.createActions(Actions);