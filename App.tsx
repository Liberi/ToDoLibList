import React from 'react';

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import FirstEntryNavigator from './navigation/FirstEntryNavigator';

function App(): React.JSX.Element {
	/* Позже проверка в роутере на первый вход пользователя */
	return (
		<FirstEntryNavigator />
	);
}

const styles = StyleSheet.create({

});

export default App;
