import { Button, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import FastImage from 'react-native-fast-image';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

import { GIPHY_API_KEY } from '@env';

import styles from './styles';
import { colors, glogalStyles } from '../../styles';
import { IconHeder } from '../../assets/svg';
import { LogOut } from '../../assets/svg';

import { UserData } from '../../store';
import { LoadingIcon, ActivityIndicatorApp } from '../../components';
import { SetData, RemoveData } from '../../utils/AsyncStorage';

export default observer(function ToDoListScreen() {
	const [isLoginOutMenu, setIsLoginOutMenu] = useState(null);
	const [useData, setUserData] = useState(null);
	const [gifData, setGifData] = useState(null);
	const [isChecked, setIsChecked] = useState(false);
	const [isLoad, setIsLoad] = useState(false);
	const [isDisableDialog, setIsDisableDialog] = useState(false);

	useEffect(() => {
		setUserData(UserData.getUserData());

		const fetchRandomImage = async () => {
			setGifData(null);
			let getUrl = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=funny`;
			try {
				const response = await axios.get(getUrl);
				setGifData({
					url: response.data.data.images.original.url.split('?')[0],
					title: response.data.data.title,
				});
			} catch (error) {
				console.log(
					'Ошибка при получении случайного изображения:',
					error,
				);
			}
		};
		fetchRandomImage();
	}, []);

	function gifTitleSlice(gifTitle) {
		if (!gifTitle) {
			return '...';
		}

		if (gifTitle.lenght > 50) {
			let newGifTitle = gifTitle.split('GIF')[0];

			if (newGifTitle.lenght > 50) {
				return newGifTitle.slice(0, 50) + '...';
			}
			return newGifTitle;
		}
		return gifTitle;
	}

	function updateDataLoginOut(isDeteteAkk) {
		setIsLoad(true);
		setIsDisableDialog(true);
		if (isDeteteAkk) {
			try {
				RemoveData(useData.email).then(() => {
					RemoveData('USER_LOGIN_CHECK').then(() => {
						/* Переходо на другую страницу (задержка перехода идет от FirstEntryNavigator в 1с) */
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
				/* Переходо на другую страницу (задержка перехода идет от FirstEntryNavigator в 1с) */
				UserData.setUserData(newUserData);
				UserData.setIsRegistration(false);
			});
		}
	}

	function LoginOutMenu() {
		return (
			<View style={styles.loginOutMenuBack}>
				<View
					style={[styles.loginOutMenuContainer, glogalStyles.shadow]}
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
						style={[styles.loginOutBtn, glogalStyles.shadow]}
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
						style={[styles.loginOutBtn, glogalStyles.shadow]}
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
		);
	}

	return (
		<View style={styles.mainContainer}>
			<ActivityIndicatorApp isActive={isLoad} colorReverse={true} />
			{!isLoginOutMenu || LoginOutMenu()}
			<View style={[styles.hederContainer, glogalStyles.shadow]}>
				<IconHeder style={styles.decorateHederImg} color={'#fff'} />
				<TouchableOpacity
					onPress={() => {
						setIsLoginOutMenu(!isLoginOutMenu);
					}}
					style={styles.logOutBtn}
				>
					<LogOut style={{ flex: 1 }} />
				</TouchableOpacity>
				<View
					style={[
						styles.containerUserImg,
						!!gifData || styles.loadingImage,
					]}
				>
					{!!gifData && (
						<FastImage
							style={styles.UserImg}
							source={{
								uri: gifData.url,
								priority: FastImage.priority.high,
							}}
							resizeMode={FastImage.resizeMode.cover}
						/>
					)}
					<LoadingIcon altStyle={styles.loadingIcon} />
				</View>
				<View style={styles.containerTextHeder}>
					<Text style={styles.HederText}>
						{`Приветствую ${useData?.fullName}!`}
					</Text>
					<Text style={styles.DescrptionText}>
						{gifTitleSlice(gifData?.title)}
					</Text>
					<Text style={styles.DescrptionText}>
						{'Ваша Gif сегодня ⬆️'}
					</Text>
				</View>
			</View>
			<Text style={[styles.HederText, { margin: '20%' }]}>
				{`Тут что-то намечается...\n
				 ${useData?.fullName}
				 ${useData?.email}
				 ${useData?.password}
				`}
			</Text>
		</View>
	);
});
