import React, { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { globalStyles } from '../../../../styles';
import { DeleteTaskBtn } from '../../../../assets/svg';

import { UserTasksList } from '../../../../store';

const ItemList = ({ id, isCheched, text, isAutoFocus }) => {
	const [isCheck, setIsCheck] = useState(isCheched);
	const [textTasks, setTextTasks] = useState(text);

	const isNullTasksText = () => {
		if (!textTasks) {
			UserTasksList.remouteItemDataList(id);
			return true;
		}
		return false;
	};

	return (
		<View key={id} style={[globalStyles.flex, styles.ItemListContainer]}>
			<TouchableOpacity
				onPress={() => {
					if (!isNullTasksText()) {
						setIsCheck(!isCheck);
						UserTasksList.updateChekesItemDataList(id, !isCheck);
					}
				}}
				activeOpacity={0.5}
				style={[
					styles.ItemListCheckbox,
					isCheck ? styles.ItemListCheckboxChecked : null,
				]}
			/>
			<TextInput
				style={[
					styles.ItemListText,
					isCheck ? styles.ItemListTextChecked : null,
				]}
				onChangeText={textTextBox => {
					if (!textTextBox) return;
					setTextTasks(textTextBox);
				}}
				value={textTasks}
				editable={!isCheck}
				autoFocus={isAutoFocus}
				// onSubmitEditing= // т.к при onSubmitEditing и так будет onBlur
				onBlur={() => {
					if (
						!isNullTasksText() &&
						!UserTasksList.isEqualTextItem(id, textTasks)
					) {
						UserTasksList.updateTextItemDataList(id, textTasks);
						UserTasksList.setCurrenJobNumberFocus(-1);
					}
				}}
				multiline={false}
				placeholder='Ваша задача'
				inputMode='text'
				placeholderTextColor={'gray'}
				maxLength={50}
			/>
			<TouchableOpacity
				onPress={() => {
					UserTasksList.remouteItemDataList(id, true);
				}}
				activeOpacity={0.5}
				style={styles.btnDeleteTasks}
			>
				<DeleteTaskBtn style={styles.iconDeleteTasks} />
			</TouchableOpacity>
		</View>
	);
};

export default ItemList;
