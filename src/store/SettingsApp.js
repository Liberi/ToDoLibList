import { makeAutoObservable } from 'mobx';
import { Dimensions } from 'react-native';

class SettingsApp {
	_screenSize = Dimensions?.get('screen');
	_isPortraitScreen = true;

	constructor() {
		makeAutoObservable(this);
	}

	setIsPortraitScreen(newIsPortain) {
		this._isPortraitScreen = newIsPortain;
	}

	get getIsPortraitScreen() {
		return this._isPortraitScreen;
	}

	setScreenSize(newSize) {
		this._screenSize = newSize;
	}

	get getScreenSize() {
		return this._screenSize;
	}
}

export default new SettingsApp();
