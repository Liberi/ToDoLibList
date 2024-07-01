import { makeAutoObservable } from 'mobx';

import { GetData } from '../utils/AsyncStorage';

class UserData {
	_isRegistration = false;
	_dataUser = null; /* data.fullName	data.email	data.password	data.isLoggedIn */

	constructor() {
		makeAutoObservable(this);
	}

	get getIsRegistration() {
		return this._isRegistration;
	}

	setIsRegistration(isNewRegistration) {
		this._isRegistration = isNewRegistration;
	}

	setUserData(newData) {
		this._dataUser = newData;
	}

	getUserData() {
		if (!this._dataUser) {
			GetData('USER_LOGIN_CHECK')
				.then(dataJson => {
					dataObg = JSON.parse(dataJson);

					this.setIsRegistration(dataObg.isLoggedIn);
					this._dataUser = dataObg;
					return dataObg;
				})
				.catch(err => {
					this.setIsRegistration(false);
					this._dataUser = null;
					console.log('Ошибка при получении данных [UserData]:', err);
					return null;
				});
		}
		return this._dataUser;
	}
}

export default new UserData();
