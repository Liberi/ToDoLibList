import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import styles from './styles';
import { MainWelcomeImg } from '../../assets/back';

import { HederWelcome, LoadingIcon } from '../../components';
import { SettingsApp } from '../../store';

const LoadingScreen = () => {
	return (
		<ScrollView>
			<View
				style={[
					styles.mainContainer,
					styles.mainFlex,
					{ minHeight: SettingsApp.getScreenSize.height },
				]}
			>
				<HederWelcome />
				<View
					style={[
						styles.loadContainer,
						{ minHeight: SettingsApp.getScreenSize.height },
					]}
				>
					<LoadingIcon altStyle={styles.loadIcon} />
				</View>
				<View style={[styles.containerText, styles.mainFlex]}>
					<MainWelcomeImg style={styles.image} />
					<Text style={styles.titleText}>
						{'Приветствую!\nОжидайте...'}
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};
export default LoadingScreen;
