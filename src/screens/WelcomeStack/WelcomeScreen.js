import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import stylesWelcome from './styles';
import { globalStyles } from '../../styles';
import { HederWelcome } from '../../components';

import { MainWelcomeImg } from '../../assets/back';

export default function WelcomeScreen({ navigation }) {
	return (
		<View
			style={[stylesWelcome.mainContainerWelcome, stylesWelcome.mainFlex]}
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
