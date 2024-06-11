import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	hederContainer: {
		padding: '10%',
		height: '30%',
		backgroundColor: colors.appYellow,
		alignItems: 'center',
		// justifyContent: 'flex-end',
	},
	decorateHederImg: {
		position: 'absolute',
		left: -40,
	},
	containerUserImg: {
		marginTop: 50,
		width: '30%',
		height: '52%',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 4,
		borderStyle: 'dashed',
		borderColor: 'white',
	},
	loadingImage: {
		borderWidth: 2,
	},
	UserImg: {
		borderRadius: 50,
		width: '100%',
		height: '100%',
	},
	HederText: {
		marginTop: 20,
		fontSize: 18,
		// color: 'black',
		fontWeight: '500',
	},
});
