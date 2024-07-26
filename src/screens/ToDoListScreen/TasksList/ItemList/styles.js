import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles';

export default StyleSheet.create({
	ItemListContainer: {
		width: '100%',
		justifyContent: 'space-between',
	},
	ItemListCheckbox: {
		width: 19,
		height: 19,
		borderWidth: 2,
		borderRadius: 2,
	},
	ItemListCheckboxChecked: {
		backgroundColor: colors.appYellow,
	},
	ItemListText: {
		
		flex: 1,
		fontSize: 16,
		color: 'black',
		height: 40,
		marginRight: '3%',
		marginLeft: '3%',
	},
	ItemListTextChecked: {
		color: colors.appYellow,
		// textDecorationLine: 'underline',
	},
	btnDeleteTasks: {
		/* borderWidth: 2,
		borderRadius: 2, */
		width: 19,
		height: 19,
	},
	iconDeleteTasks: {
		
	},
});
