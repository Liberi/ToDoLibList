import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';
import { observer } from 'mobx-react-lite';
import React from 'react';

import WelcomeStack from '../screens/WelcomeStack';
import ToDoListScreen from '../screens/ToDoListScreen';

import RouterScreen from '../store/RouterScreen';

export default observer(function FirstEntryNavigator() {
	RouterScreen.updateUserRegistration();

	return (
		<NavigationContainer>
			<StatusBar
				translucent
				backgroundColor={'transparent'}
				barStyle={'dark-content'}
			/>
			{RouterScreen.isRegistration ? <ToDoListScreen/> : <WelcomeStack />}		
		</NavigationContainer>
	);
});
