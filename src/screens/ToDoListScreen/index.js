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
	const [imageUrl, setImageUrl] = useState(null);

	useEffect(() => {
		setUserData(UserData.getUserData());

		const fetchRandomImage = async () => {
			setImageUrl(null);
			let getUrl = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=funny`;
			try {
				const response = await axios.get(getUrl);
				setImageUrl(
					response.data.data.images.original.url.split('?')[0],
				);
/* 				console.log('Получено изо: ');
				console.log(imageUrl);
				console.log(
					response.data.data.images.original.url.split('?')[0],
				); */
			} catch (error) {
				console.log(
					'Ошибка при получении случайного изображения:',
					error,
				);
			}
		};
		fetchRandomImage();
		// console.log('url2', imageUrl);
	}, []);

	return (
		<View style={styles.mainContainer}>
			<View style={styles.hederContainer}>
				<IconHeder
					width={240}
					height={170}
					style={styles.decorateHederImg}
					color={'#fff'}
				/>
				<View
					style={[
						styles.containerUserImg,
						!!imageUrl || styles.loadingImage,
					]}
				>
					{imageUrl ? (
						<FastImage
							style={styles.UserImg}
							source={{
								uri: imageUrl ,
								priority: FastImage.priority.high,
							}}
							resizeMode={FastImage.resizeMode.cover}
						/>
					) : (
						<LoadingIcon />
					)}
				</View>
				<Text style={styles.HederText}>{`Приветствую ${useData?.fullName}!`}</Text>
			</View>
		</View>
	);
});
