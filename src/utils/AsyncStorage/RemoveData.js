import AsyncStorage from '@react-native-async-storage/async-storage';

function RemoveData(key) {
	return new Promise((resolve, reject) => {
		AsyncStorage.removeItem(key)
			.then(() => {
				resolve();
			})
			.catch(error => {
				console.log('Ошибка при удалении данных:', error);
				reject(error);
			});
	});
}

export default RemoveData;
