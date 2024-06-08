import { makeAutoObservable } from 'mobx';

import UserData from './UserData';

class RouterScreen {
	isRegistration = false;

	constructor() {
		makeAutoObservable(this);
	}

	updateUserRegistration() {
		if (UserData.getUserData()) {
			this.isRegistration = true;
		} else {
			this.isRegistration = false;
		}
	}
}

export default new RouterScreen();
