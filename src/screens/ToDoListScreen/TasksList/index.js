import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView as GestureScrollView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import styles from './styles';
import { globalStyles } from '../../../styles';

import { PlusSquare } from '../../../assets/svg';
import ItemList from './ItemList';

import { UserData,UserTasksList } from '../../../store';
import { LoadingIcon } from '../../../components';
import { observer } from 'mobx-react-lite';

const TasksList = () => {
	const data = UserTasksList.getDataList?.slice().reverse();
	const [isLosding, setIsLoading] = useState(true);

	useEffect(() => {
		UserTasksList.getDataListStore(UserData.getUserData().email);
		!data || setIsLoading(false);
		setTimeout(() => {
			!isLosding || setIsLoading(false);
		}, 3000);
	}, []);

	const ViewDataList = ({ data }) => {
		if (data) {
			return (
				<GestureScrollView
					contentContainerStyle={styles.dalyTasksScrollContainer}
				>
					{data.map(itemList => (
						<ItemList
							key={itemList.id}
							id={itemList.id}
							isCheched={itemList.isCheked}
							text={itemList.text}
							isAutoFocus={
								UserTasksList.currenJobNumberFocus == itemList.id
							}
						/>
					))}
				</GestureScrollView>
			);
		} else {
			return (
				<View style={styles.tasksListLoadingContainer}>
					{isLosding ? (
						<>
							<LoadingIcon
								altStyle={styles.tasksListLoadingIcon}
							/>
							<Text style={styles.tasksListLoadingText}>
								Загрузка...
							</Text>
						</>
					) : (
						<Text style={styles.tasksListLoadingText}>
							Задач пока нет...
						</Text>
					)}
				</View>
			);
		}
	};

	return (
		<View style={styles.tasksListContainer}>
			<Text style={styles.hederListText}>Лист задач</Text>
			<View style={[styles.dalyTasksContainer, globalStyles.shadow]}>
				<View style={[globalStyles.flex, styles.dalyTasksHeder]}>
					<Text style={styles.dalyTasksHederText}>
						Ежедневные задачи
					</Text>
					<TouchableOpacity
						onPress={() => {
							console.log('Добаление новой записи');
							UserTasksList.addNewItemDataList();
						}}
						activeOpacity={0.5}
						style={styles.dalyTasksPlusBtn}
					>
						<PlusSquare />
					</TouchableOpacity>
				</View>
				<ViewDataList data={data} />
			</View>
		</View>
	);
};

export default observer(TasksList);
