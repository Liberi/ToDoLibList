import { StyleSheet } from 'react-native';

import { colors } from '../../../styles';

export default StyleSheet.create({
	loginOutTransparentWhite: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: 3,
		backgroundColor: colors.transparentWhite,
	},
	loginOutMenuBack: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginOutMenuContainer: {
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
	loginOutCheckboxContainer: {
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
