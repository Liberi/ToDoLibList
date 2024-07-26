import { StyleSheet } from 'react-native';

import { colors } from '../../../styles';

export default StyleSheet.create({
	tasksListContainer: {
		height: '45%',
		width: '100%',
		paddingLeft: '7%',
		paddingRight: '7%',
		marginBottom: 20,
	},
	hederListText: {
		width: '100%',
		fontSize: 20,
		color: 'black',
		fontWeight: '900',
		color: 'black',
		marginLeft: '2%',
		marginBottom: '5%',
	},
	dalyTasksContainer: {
		width: '100%',
		height: '80%',
		padding: '6%',
		backgroundColor: 'white',
		borderRadius: 12,
	},
	dalyTasksHeder: {
		marginBottom: '5%',
		justifyContent: 'space-between',
	},
	dalyTasksHederText: {
		color: 'black',
		fontSize: 18,
		fontWeight: '600',
		color: 'black',
	},
	dalyTasksPlusBtn: {
		width: 24,
		height: 24,
	},
	dalyTasksScrollContainer: {
		padding: 2,
		minHeight: '80%',
	},
	tasksListLoadingContainer: {
		height: '80%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tasksListLoadingIcon: {
		height: '30%',
		backgroundColor: null,
	},
	tasksListLoadingText: {
		color: colors.appYellow,
		fontSize: 18,
		fontWeight: '700',
		color: 'black',
	},
});
