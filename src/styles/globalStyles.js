import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
	flex: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	shadow: {
		borderColor: colors.transparentWhite,
		shadowColor: 'black',
		elevation: 8,
	},
});
