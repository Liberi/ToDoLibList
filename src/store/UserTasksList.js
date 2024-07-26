import { makeAutoObservable } from 'mobx';

import UserData from './UserData';
import { GetData, SetData } from '../utils/AsyncStorage';

class UserTasksList {
	_userData =
		null; /* data.fullName  data.password   (data.tasksData) - не обновляется */
	_dataList = null;
	currenJobNumberFocus = -1;

	constructor() {
		makeAutoObservable(this);
	}

	setCurrenJobNumberFocus(newJobNumberFocus) {
		this.currenJobNumberFocus = newJobNumberFocus;
	}

	get getDataList() {
		console.log('Отправлены данные: ', this._dataList?.length);
		return this._dataList;
	}

	isEqualTextItem(id, text) {
		return this._dataList[id].text === text;
	}

	updateDataList(newData) {
		this._dataList = newData;
	}

	updateChekesItemDataList(id, newIsCheked) {
		this._dataList[id].isCheked = newIsCheked;
		this.updateDataListStore(UserData.getUserData().email);
	}

	updateTextItemDataList(id, newText) {
		this._dataList[id].text = newText;
		this.updateDataListStore(UserData.getUserData().email);
	}

	remouteItemDataList(idItem, updateStore = false) {
		!this._dataList || this._dataList.splice(idItem, 1);
		!this._dataList?.length <= 0 || this.updateDataList(null);
		!updateStore || this.updateDataListStore(UserData.getUserData().email);
	}

	updateDataListStore(userMail) {
		SetData(userMail, {
			fullName: this._userData.fullName,
			password: this._userData.password,
			tasksData: this._dataList,
		});
	}

	addNewItemDataList() {
		if (this._dataList) {
			this.currenJobNumberFocus = this._dataList.length; // не -1 т.к мы сейчас добавим элемент
			this._dataList.push({
				// unshift пока нен юзаю т.к сложно понять индекс
				id: this._dataList.length,
				isCheked: false,
				text: '',
			});
		} else {
			this.currenJobNumberFocus = 0;
			this._dataList = [
				{
					id: 0,
					isCheked: false,
					text: '',
				},
			];
		}
	}

	getDataListStore(userMail) {
		if (!this._dataList && userMail) {
			GetData(userMail)
				.then(dataJson => {
					dataObg = JSON.parse(dataJson);

					this._userData = dataObg;
					// console.log(dataObg?.tasksData?.length);
					this.updateDataList(dataObg?.tasksData);
					return dataObg;
				})
				.catch(err => {
					this._userData = null;
					console.log(
						'Ошибка при получении данных [DataListStore]:',
						err,
					);
					return null;
				});
		}
		return this._userData;
	}
}

export default new UserTasksList();
