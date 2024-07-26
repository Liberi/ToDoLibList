import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
	containerGestureHandlerRootView: {
		// flex: 1,
		// backgroundColor: 'white',
	},
	mainScrollContainer: {
		backgroundColor: 'white',
	},
	mainContainer: {
		backgroundColor: 'white',
		paddingBottom: 20,
	},
	hederContainer: {
		padding: '5%',
		backgroundColor: colors.appYellow,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	decorateHederImg: {
		width: '50%',
		height: '40%',
		position: 'absolute',
		zIndex: 1,
	},
	logOutBtn: {
		position: 'absolute',
		top: '25%',
		right: '10%',
		width: 25,
		height: 25,
	},
	containerUserImg: {
		width: 90,
		height: 90,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 4,
		borderStyle: 'dashed',
		borderColor: 'white',
	},
	loadingImage: {
		borderWidth: 3,
	},
	UserImg: {
		position: 'absolute',
		zIndex: 2,
		borderRadius: 50,
		width: '100%',
		height: '100%',
	},
	loadingIcon: {
		zIndex: 1,
	},
	containerTextHeder: {
		marginTop: 15,
		width: '80%',
		alignItems: 'center',
	},
	HederText: {
		fontSize: 18,
		color: 'black',
		fontWeight: '500',
	},
	DescrptionText: {
		marginTop: 5,
		width: '100%',
		fontSize: 14,
		color: 'white',
		fontWeight: '500',
		textAlign: 'center',
	},
});
