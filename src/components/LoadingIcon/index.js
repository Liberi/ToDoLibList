import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import React from 'react';

import { Loading } from '../../assets/svg';
import { colors } from '../../styles';

const LoadingIcon = ({altStyle}) => {
	return (
		<Animatable.View
			animation={{
				0: {
					rotate: '0deg',
					transformOrigin: '50% 50%',
				},
				1: {
					rotate: '360deg',
					transformOrigin: '50% 50%',
				},
			}}
			duration={1500}
			easing='linear'
			iterationCount='infinite'
			style={[styles.container, altStyle]}
		>
			<Loading
				style={styles.ImgLoad}
			/>
		</Animatable.View>
	);
};

export default LoadingIcon;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.transparentWhite,
		width: '70%',
		height: '70%',
		borderRadius: 50,
	},
	ImgLoad: {
		flex: 1,
	},
});
