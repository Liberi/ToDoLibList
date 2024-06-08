import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import colors from '../../styles/colors';
import HearerImg from '../../assets/icon/iconHeder.svg';

import UserData from '../../store/UserData';
import { observer } from 'mobx-react-lite';

export default observer(function ToDoListScreen() {
	/* const [useName, setUserName] = useState('Имя');

	useEffect(() => {
		setUserName(UserData.fullNameUser);
	}, [UserData.fullNameUser]); */

	return (
		<View>
			<View>
				<HearerImg width={200} height={120} fill={'#FFFCEE'} />
				<Text>{`Приветствую ${UserData.fullNameUser}!`}</Text>
			</View>
		</View>
	);
});

const styles = StyleSheet.create({});
