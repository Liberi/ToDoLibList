import { Modal, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';

import styles from './styles';
import { colors, globalStyles } from '../../../styles';

import { UserData } from '../../../store';
import { SetData, RemoveData } from '../../../utils/AsyncStorage';

const LoginOutMenu = ({ isLoginOutMenu, setIsLoginOutMenu, useData, setIsLoad }) => {
    const [isDisableDialog, setIsDisableDialog] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	function updateDataLoginOut(isDeteteAkk) {
		setIsLoad(true);
		setIsDisableDialog(true);
		if (isDeteteAkk) {
			try {
				RemoveData(useData.email).then(() => {
					RemoveData('USER_LOGIN_CHECK').then(() => {
						/* Переход на другую страницу (задержка перехода идет от FirstEntryNavigator в 1с) */
						UserData.setUserData(null);
						UserData.setIsRegistration(false);
					});
				});
			} catch (error) {
				console.log('Прехвачена ошибка при удалении данных:', error);
				setIsLoad(false);
				setIsDisableDialog(false);
			}
		} else {
			let newUserData = {
				fullName: useData.fullName,
				email: useData.email,
				password: useData.password,
				isLoggedIn: false,
			};
			SetData('USER_LOGIN_CHECK', newUserData).then(() => {
				/* Переход на другую страницу (задержка перехода идет от FirstEntryNavigator в 1с) */
				UserData.setUserData(newUserData);
				UserData.setIsRegistration(false);
			});
		}
	}

	return (
		<View
			visible={false}
			style={[
				styles.loginOutTransparentWhite,
				{ zIndex: isLoginOutMenu ? 3 : 0 },
			]}
		>
			<Modal
				animationType='slide'
				transparent={true}
				visible={isLoginOutMenu}
				onRequestClose={() => {
					setIsLoginOutMenu(false);
				}}
			>
				<View style={styles.loginOutMenuBack}>
					<View
						style={[
							styles.loginOutMenuContainer,
							globalStyles.shadow,
						]}
					>
						<Text
							style={styles.loginOutTextAkkInfo}
						>{`Вы выходите из аккаунта\n${useData?.email}`}</Text>
						<View style={styles.loginOutCheckboxContainer}>
							<CheckBox
								disabled={isDisableDialog}
								value={isChecked}
								onValueChange={checked => setIsChecked(checked)}
								tintColors={{
									true: isDisableDialog
										? 'gray'
										: colors.appBackGray,
									false: isDisableDialog
										? 'gray'
										: colors.appBackGray,
								}}
							/>
							<Text
								onPress={() => {
									setIsChecked(!isChecked);
								}}
								style={[
									styles.loginOutCheckboxText,
									isDisableDialog
										? styles.loginOutTextNoActive
										: null,
								]}
							>
								Удалить аккаунт
							</Text>
						</View>
						<TouchableOpacity
							disabled={isDisableDialog}
							onPress={() => {
								updateDataLoginOut(isChecked);
							}}
							activeOpacity={0.5}
							style={[styles.loginOutBtn, globalStyles.shadow]}
						>
							<Text
								style={[
									styles.loginOutBtnText,
									isDisableDialog
										? styles.loginOutTextNoActive
										: null,
								]}
							>
								Выйти
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							disabled={isDisableDialog}
							onPress={() => {
								setIsLoginOutMenu(false);
							}}
							activeOpacity={0.5}
							style={[styles.loginOutBtn, globalStyles.shadow]}
						>
							<Text
								style={[
									styles.loginOutBtnText,
									isDisableDialog
										? styles.loginOutTextNoActive
										: null,
								]}
							>
								Отменить
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
}

export default LoginOutMenu;
