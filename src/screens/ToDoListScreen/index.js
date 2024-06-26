import { Button, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

import { GIPHY_API_KEY } from '@env';

import styles from './styles';
import { colors, globalStyles } from '../../styles';
import { IconHeder } from '../../assets/svg';
import { LogOut } from '../../assets/svg';

import { UserData } from '../../store';
import { LoadingIcon, ActivityIndicatorApp } from '../../components';
import LoginOutMenu from './LoginOutMenu';
import TimerScreen from './TimerScreen';

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
		<View style={styles.mainContainer}>
			<ActivityIndicatorApp isActive={isLoad} colorReverse={true} />
			<LoginOutMenu
				isLoginOutMenu={isLoginOutMenu}
				setIsLoginOutMenu={setIsLoginOutMenu}
				useData={useData}
				setIsLoad={setIsLoad}
			/>
			<View style={[styles.hederContainer, globalStyles.shadow]}>
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
			<TimerScreen />
			{/* <Text style={[styles.HederText, { margin: '20%' }]}>
				{`Тут что-то намечается...\n
				 ${useData?.fullName}
				 ${useData?.email}
				 ${useData?.password}
				`}
			</Text> */}
		</View>
	);
};

export default observer(ToDoListScreen);
