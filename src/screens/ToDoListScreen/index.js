import { Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';
import axios from 'axios';

import { GIPHY_API_KEY } from '@env';

import { IconHeder } from '../../assets/svg';
import { LoadingIcon } from '../../components';
import styles from './styles';

import { UserData } from '../../store';
import { observer } from 'mobx-react-lite';

export default observer(function ToDoListScreen() {
	const [useData, setUserData] = useState(null);
	const [gifData, setGifData] = useState(null);

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

	return (
		<View style={styles.mainContainer}>
			<View style={styles.hederContainer}>
				<IconHeder style={styles.decorateHederImg} color={'#fff'} />
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
						{'Ваша Gif сегодня ⬆️'}
					</Text>
					<Text style={styles.DescrptionText}>
						{`${
							gifData?.title ? gifData?.title.slice(0, 50) : ''
						}...`}
					</Text>
				</View>
			</View>
			<Text style={[styles.HederText, {margin: '20%'}]}>
				{`Тут что-то намечается...\n
				 ${useData?.fullName}
				 ${useData?.email}
				 ${useData?.password}
				`}
			</Text>
		</View>
	);
});
