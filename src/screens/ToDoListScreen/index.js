import { Text, TouchableOpacity, View } from 'react-native';
import {
	GestureHandlerRootView,
	ScrollView as GestureScrollView,
} from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

import { GIPHY_API_KEY } from '@env';

import styles from './styles';
import { globalStyles } from '../../styles';
import { IconHeder } from '../../assets/svg';
import { LogOut } from '../../assets/svg';

import { UserData, SettingsApp } from '../../store';
import { LoadingIcon, ActivityIndicatorApp } from '../../components';
import LoginOutMenu from './LoginOutMenu';
import TimerScreen from './TimerScreen';
import TasksList from './TasksList';

const ToDoListScreen = () => {
	const [isLoginOutMenu, setIsLoginOutMenu] = useState(null);
	const [useData, setUserData] = useState(null);
	const [gifData, setGifData] = useState(null);
	const [isLoad, setIsLoad] = useState(false);

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

	return (
		<GestureHandlerRootView style={styles.containerGestureHandlerRootView}>
			<GestureScrollView style={styles.mainScrollContainer}>
				<View
					style={[
						styles.mainContainer,
						SettingsApp.getIsPortraitScreen
							? { minHeight: SettingsApp.getScreenSize.height }
							: {
									height:
										SettingsApp.getScreenSize.height * 2.4,
							  },
					]}
				>
					<ActivityIndicatorApp
						isActive={isLoad}
						colorReverse={true}
					/>
					<LoginOutMenu
						isLoginOutMenu={isLoginOutMenu}
						setIsLoginOutMenu={setIsLoginOutMenu}
						useData={useData}
						setIsLoad={setIsLoad}
					/>
					<IconHeder style={styles.decorateHederImg} color={'#fff'} />
					<View
						style={[
							styles.hederContainer,
							globalStyles.shadow,
							{
								height: SettingsApp.getIsPortraitScreen
									? '35%'
									: '40%',
							},
						]}
					>
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
					<TimerScreen />
					<TasksList />
				</View>
			</GestureScrollView>
		</GestureHandlerRootView>
	);
};

export default observer(ToDoListScreen);
