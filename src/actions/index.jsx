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

}

export default alt.createActions(Actions);