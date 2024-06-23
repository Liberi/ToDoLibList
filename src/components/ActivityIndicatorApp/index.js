import { ActivityIndicator, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import React from 'react';

import { colors } from '../../styles';

const ActivityIndicatorApp = ({ isActive, colorReverse = false }) => {
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
				style={[styles.indicator, {backgroundColor: colorReverse ? colors.appBackGray : colors.appYellow}]}
				size={'large'}
				color={colorReverse ? colors.appYellow : colors.appBackGray}
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
		width: '100%',
		top: 50,
		zIndex: 10,
	},
	indicator: {
		borderRadius: 20,
	},
});
