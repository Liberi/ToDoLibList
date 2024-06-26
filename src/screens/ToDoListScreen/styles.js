import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.appBackGray,
	},
	hederContainer: {
		padding: '10%',
		height: '35%',
		backgroundColor: colors.appYellow,
		alignItems: 'center',
	},
	decorateHederImg: {
		width: '50%',
		height: '40%',
		position: 'absolute',
		left: -20,
	},
	logOutBtn: {
		position: 'absolute',
		top: '25%',
		right: '10%',
		width: 25,
		height: 25,
	},
	containerUserImg: {
		marginTop: '10%',
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
		width: '100%',
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
	loginOutMenuBack: {
		position: 'absolute',
		zIndex: 3,
		width: '100%',
		height: '100%',
		backgroundColor: colors.transparentWhite,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginOutMenuContainer: {
		width: '70%',
		height: '30%',
		padding: '5%',
		backgroundColor: colors.appYellow,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	loginOutTextAkkInfo: {
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	loginOutCheckboxContainer:{
		flexDirection: 'row',
		justifyContent: 'center',
	},
	loginOutCheckboxText: {
		alignSelf: 'center',
		fontSize: 14,
		color: colors.appBackGray,
		fontWeight: 'bold',
	},
	loginOutBtn: {
		padding: '3%',
		width: '100%',
		backgroundColor: colors.appBackGray,
		borderRadius: 10,
		alignItems: 'center',
	},
	loginOutBtnText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
	},
	loginOutTextNoActive: {
		color: 'gray',
	},
});
