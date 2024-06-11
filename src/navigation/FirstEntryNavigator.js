import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import { WelcomeStack, ToDoListScreen, LoadingScreen } from '../screens';
import { UserData } from '../store';

export default observer(function FirstEntryNavigator() {
	const [CurrentScreens, setCurrentScreens] = useState(<LoadingScreen />);

	useEffect(() => {
		isGetData();
		UserData.getUserData();
	}, [UserData._isRegistration]);

	function isGetData() {
		setTimeout(() => {
			if (UserData.getIsRegistration !== null) {
				setCurrentScreens(
					UserData.getIsRegistration ? (
						<ToDoListScreen />
					) : (
						<WelcomeStack />
					),
				);
			}
			else {
				isGetData();
			}
		}, 2000);
	}

	return (
		<NavigationContainer>
			<StatusBar
				translucent
				backgroundColor={'transparent'}
				barStyle={'dark-content'}
			/>
			{CurrentScreens}
		</NavigationContainer>
	);
});
