import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import colors from '../../styles/colors';

const ActivityIndicatorApp = () => {
	return (
		<View style={styles.overlay}>
			<ActivityIndicator
				style={styles.indicator}
				size={'large'}
				color={colors.appBackGray}
			/>
		</View>
	);
};

export default ActivityIndicatorApp;

const styles = StyleSheet.create({
	overlay: {
		position: 'absolute',
		top: 80,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1,
	},
	indicator: {
		backgroundColor: colors.appYellow,
		borderRadius: 20,
	},
});
