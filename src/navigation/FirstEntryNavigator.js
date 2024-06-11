import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { WelcomeStack, ToDoListScreen } from '../screens';
import { UserData } from '../store';

export default observer(function FirstEntryNavigator() {
	useEffect(() => {
		UserData.getUserData();
	}, []);

	return (
		<NavigationContainer>
			<StatusBar
				translucent
				backgroundColor={'transparent'}
				barStyle={'dark-content'}
			/>
			{UserData.getIsRegistration ? (
				<ToDoListScreen />
			) : (
				<WelcomeStack />
			)}
		</NavigationContainer>
	);
});
