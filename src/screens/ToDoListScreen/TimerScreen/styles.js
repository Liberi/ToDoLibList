import { StyleSheet } from 'react-native';

import { colors } from '../../../styles';

export default StyleSheet.create({
	timerContainer:{
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		width: '100%',
		height: 150,
	},
	numberContainer: {
		width: 75,
		height: 75,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberTimer: {
		width: '85%',
		height: '85%',
		color: 'black',
		fontSize: 50,
		fontWeight: '900',
		letterSpacing: -2,
		textAlign: 'center',
	},
	pointsTimer: {
		margin: '2%',
		width: '5%',
		height: 80,
		color: 'black',
		fontSize: 55,
		fontWeight: '900',
	},
})