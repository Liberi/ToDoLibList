import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, { useState } from 'react';

const TextErr = ({ text, textColor, anim }) => {
	return (
		<View style={styles.textExeption}>
			<Animatable.Text
				style={{ color: textColor }}
				animation={anim}
				duration={1000}
				delay={500}
			>
				{text}
			</Animatable.Text>
		</View>
	);
};

export default TextErr;

const styles = StyleSheet.create({
	textExeption: {
		color: 'red',
		position: 'absolute',
		top: -20,
	},
});
