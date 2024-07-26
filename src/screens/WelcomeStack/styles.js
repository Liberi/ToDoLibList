import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
	scrollContainer:{
		// maxHeight: minHeightScreen,
	},
	mainContainerWelcome: {
		height: '100%',
		paddingBottom: 100,
		backgroundColor: colors.appBackGray,
	},
	mainFlex: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	BntAndElseTextContainer: {
		width: '100%',
		height: '15%',
	},
	btnNext: {
		marginBottom: 20,
		backgroundColor: colors.appYellow,
		width: '80%',
		height: 70,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textNoActive: {
		color: 'gray',
	},
	btnText: {
		fontSize: 26,
		color: 'black',
		fontWeight: 'bold',
		fontFamily: 'Roboto',
	},
	titleText: {
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'Roboto',
		color: 'black',
	},
	descriptionText: {
		textAlign: 'center',
		width: '80%',
		color: 'black',
	},
	containerElseText: {
		position: 'absolute',
		top: 30,
	},
	btnElse: {
		color: colors.appYellow,
		fontWeight: 'bold',
		marginLeft: 10,
	},
	titleElseText: {
		color: 'black',
	},
	textInputContainer: {
		width: '100%',
		alignItems: 'center',
	},
	textInput: {
		width: '80%',
		height: 50,
		padding: 15,
		paddingLeft: 25,
		borderRadius: 30,
		backgroundColor: 'white',
		marginBottom: 13,
		marginTop: 13,
		color: 'black',
	},
});
