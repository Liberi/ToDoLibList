import { makeAutoObservable } from 'mobx';

import GetData from '../utils/AsyncStorage/GetData';

class UserData {
	fullNameUser = '';
	emailUser = '';
	passwordUser = '';

	constructor() {
		makeAutoObservable(this);
	}

	getUserData(){
		GetData('USER_LOGIN_CHECK')
			.then(dataJson => {
				dataObg = JSON.parse(dataJson);

				this.fullNameUser = dataObg.fullName;
				this.emailUser = dataObg.email;
				this.passwordUser = dataObg.password;

				return dataObg;
			})
			.catch(err => {
				console.log('Ошибка при получении данных:', err);
			});

		return {};
	}
}

export default new UserData();
