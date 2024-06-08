import AsyncStorage from '@react-native-async-storage/async-storage';

function SetData(key, value) {
	return new Promise((resolve, reject) => {
		AsyncStorage.setItem(key, JSON.stringify(value))
			.then(() => {
				resolve();
			})
			.catch(error => {
				console.log('Ошибка при сохранении данных:', error);
				reject(error);
			});
	});
}

export default SetData