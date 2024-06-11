import { ActivityIndicator, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import React from 'react';

import { colors } from '../../styles';

const ActivityIndicatorApp = ({ isActive }) => {
	return (
		<Animatable.View
			style={[
				styles.overlay,
			]}
			animation={isActive ? 'slideInDown' : 'slideOutUp'}
			delay={500}
			duration={500}
		>
			<ActivityIndicator
				style={styles.indicator}
				size={'large'}
				color={colors.appBackGray}
			/>
		</Animatable.View>
	);
};

export default ActivityIndicatorApp;

const styles = StyleSheet.create({
	overlay: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 50,
		zIndex: 1,
	},
	indicator: {
		backgroundColor: colors.appYellow,
		borderRadius: 20,
	},
});
