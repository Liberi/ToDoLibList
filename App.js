import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';

import { FirstEntryNavigator } from './src/navigation';
import { SettingsApp } from './src/store';

function App() {
	useEffect(() => {
		const handleScreenChange = () => {
			const { width, height } = Dimensions.get('window');
			SettingsApp.setIsPortraitScreen(!(width > height));
			/* if (width > height) {
				setOrientation('landscape');
			} else {
				setOrientation('portrait');
			} */

			SettingsApp.setScreenSize(Dimensions.get('screen'));
		};

		Dimensions?.addEventListener('change', handleScreenChange);
		handleScreenChange(); // Вызываем функцию при первом рендере

		return () => {
		try {
			Dimensions?.removeEventListener('change', handleScreenChange);
		} catch (error) {
			console.log('Ошибка removeEventListener');
		}
		};
	}, []);

	return <FirstEntryNavigator />;
}

export default App;
