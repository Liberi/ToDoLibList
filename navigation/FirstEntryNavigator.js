import { View, Text, StatusBar } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import WelcomeStack from '../screens/WelcomeStack';

export default function FirstEntryNavigator() {
	return (
		<NavigationContainer>
			<StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
			<WelcomeStack />
		</NavigationContainer>
	);
}
