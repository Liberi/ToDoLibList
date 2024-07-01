import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native';

import stylesWelcome from './styles';
import { globalStyles } from '../../styles';
import { HederWelcome } from '../../components';

import { MainWelcomeImg } from '../../assets/back';
import { SettingsApp } from '../../store';

export default function WelcomeScreen({ navigation }) {
	return (
		<ScrollView styles={stylesWelcome.scrollContainer}>
			<View
				style={[
					stylesWelcome.mainContainerWelcome,
					stylesWelcome.mainFlex,
					SettingsApp.getIsPortraitScreen
						? { minHeight: SettingsApp.getScreenSize.height }
						: {
								height: SettingsApp.getScreenSize.height * 2,
						  },
				]}
			>
				<HederWelcome />
				<View style={[styles.containerText, stylesWelcome.mainFlex]}>
					<MainWelcomeImg style={styles.image} />
					<Text style={stylesWelcome.titleText}>
						Давайте сделаем все вовремя!
					</Text>
					<Text style={stylesWelcome.descriptionText}>
						Добро пожаловать в Ваш персональный органайзер! Начните
						управлять Вашими задачами и достигайте целей легко и
						эффективно.
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('SignUpScreen');
					}}
					style={[stylesWelcome.btnNext, globalStyles.shadow]}
				>
					<Text style={stylesWelcome.btnText}>Начать</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '60%',
		height: 190,
		resizeMode: 'contain',
		marginBottom: 20,
	},
	containerText: {
		width: '100%',
		height: '50%',
		marginBottom: 50,
	},
});
