import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

import colors from '../styles/colors';
import HederWelcomeImg from '../assets/icon/iconHeder.svg'

export default function HederWelcome() {
	return (
		<View style={styles.container}>
			<HederWelcomeImg width={200} height={120} fill={colors.appYellow}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '17%',
		// borderWidth: 2,
	},
});
