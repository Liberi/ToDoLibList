import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import React from 'react';

import { Loading } from '../../assets/svg';

const LoadingIcon = () => {
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
			style={styles.container}
		>
			<Loading
				// width={50}
				// height={50}
				style={styles.ImgLoad}
			/>
		</Animatable.View>
	);
};

export default LoadingIcon;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#FFFFFF95',
		width: '80%',
		height: '80%',
		borderRadius: 50,
	},
	ImgLoad: {
		flex: 1,
	},
});
