import { makeAutoObservable } from 'mobx';

import UserData from './UserData';

class RouterScreen {
	// isRegistration = false;

	constructor() {
		makeAutoObservable(this);
	}

	/* updateUserRegistration() {
		UserData.getUserData().
		this.isRegistration = !!res;
		console.log(this.isRegistration, res);
	} */
}

export default new RouterScreen();
