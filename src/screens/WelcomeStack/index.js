import { View, Text, StatusBar } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './WelcomeScreen.js';
import SignInScreen from './SignInScreen.js';
import SignUpScreen from './SignUpScreen.js';

const Stack = createNativeStackNavigator();

export default function WelcomeStack() {
	return (
		<Stack.Navigator
			initialRouteName='Welcome'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Welcome' component={WelcomeScreen} />
			<Stack.Screen name='SignInScreen' component={SignInScreen} />
			<Stack.Screen name='SignUpScreen' component={SignUpScreen} />
		</Stack.Navigator>
	);
}
