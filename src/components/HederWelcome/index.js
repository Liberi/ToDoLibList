import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

import { colors } from '../../styles';
import { IconHeder } from '../../assets/svg';

export default function HederWelcome() {
	return (
		<View style={styles.container}>
			<IconHeder
				width={240}
				height={170}
				style={styles.decorateHederImg}
				color={colors.appYellow}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	decorateHederImg:{
		position: 'absolute',
		left: -40,
	},
	container: {
		width: '100%',
		height: '20%',
	},
});
