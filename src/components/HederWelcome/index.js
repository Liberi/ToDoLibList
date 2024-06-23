import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

import { colors } from '../../styles';
import { IconHeder } from '../../assets/svg';

export default function HederWelcome() {
	return (
		<View style={styles.container}>
			<IconHeder
				style={styles.decorateHederImg}
				color={colors.appYellow}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	decorateHederImg:{
		width: '50%',
		height: '40%',
		position: 'absolute',
		left: -10,
	},
	container: {
		width: '100%',
		height: '20%',
	},
});
