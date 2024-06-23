import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../styles';
const minHeightScreen = Dimensions.get('screen').height;

export default StyleSheet.create({
	mainContainer: {
		flex: 1,
		zIndex: 1,
		paddingBottom: 100,
		backgroundColor: colors.appBackGray,
		justifyContent: 'space-between',
	},
	loadContainer: {
		height: minHeightScreen,
        width: '100%',
		position: 'absolute',
		zIndex: 2,
		backgroundColor: colors.transparentWhite,
        alignItems: 'center',
        justifyContent: 'center',
	},
	loadIcon: {
		width: 80,
		height: 80,
	},
	mainFlex: {
		alignItems: 'center',
	},
	image: {
		width: '60%',
		height: 190,
		resizeMode: 'contain',
		marginBottom: 20,
	},
	containerText: {
		width: '100%',
		height: '50%',
		marginBottom: 50,
	},
	titleText: {
        marginTop: '5%',
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'Roboto',
		color: 'black',
        textAlign: 'center',
	},
});
