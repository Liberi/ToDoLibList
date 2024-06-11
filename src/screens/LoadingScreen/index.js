import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { MainWelcomeImg } from '../../assets/back';

import { HederWelcome, LoadingIcon } from '../../components';

const LoadingScreen = () => {
	return (
		<View style={[styles.mainContainer, styles.mainFlex]}>
			<HederWelcome />
			<View style={styles.loadContainer}>
				<LoadingIcon altStyle={styles.loadIcon}/>
			</View>
			<View style={[styles.containerText, styles.mainFlex]}>
				<MainWelcomeImg style={styles.image} />
				<Text style={styles.titleText}>
					{'Приветствую!\nОжидайте...'}
				</Text>
			</View>
		</View>
	);
};
export default LoadingScreen;
