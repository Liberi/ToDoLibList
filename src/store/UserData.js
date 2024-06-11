import { makeAutoObservable } from 'mobx';

import { GetData } from '../utils/AsyncStorage';

class UserData {
	_isRegistration = false;
	_data = null; /* data.fullName	data.email	data.password */

	constructor() {
		makeAutoObservable(this);
	}

	get getIsRegistration() {
		return this._isRegistration;
	}

	setIsRegistration(isNewRegistration){
		this._isRegistration = isNewRegistration;
	}

	getUserData() {
		if (!this._data) {
			GetData('USER_LOGIN_CHECK')
				.then(dataJson => {
					dataObg = JSON.parse(dataJson);

					this.setIsRegistration(true);
					this._data = dataObg;
					return dataObg;
				})
				.catch(err => {
					this.setIsRegistration(false);
					this._data = null;
					console.log('Ошибка при получении данных:', err);
					return null;
				});
		}
		return this._data;
	}
}

export default new UserData();
