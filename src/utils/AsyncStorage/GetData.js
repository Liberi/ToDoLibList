import AsyncStorage from '@react-native-async-storage/async-storage';

function GetData(key) {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem(key)
			.then(value => {
				if (value !== null) {
					resolve(value);
				} else {
					reject(new Error('Данные были пустыми!'));
				}
			})
			.catch(error => {
				console.log('Ошибка при получении данных:', error);
				reject(error);
			});
	});
}

export default GetData;
