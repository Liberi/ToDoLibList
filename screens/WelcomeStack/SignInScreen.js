import React, { useRef, useState } from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet,
	TouchableOpacity,
	Alert,
	TextInput,
	ScrollView,
} from 'react-native';

import stylesWelcome from './styles';
import glogalStyles from '../../styles/glogalStyles';

import HederWelcome from '../../components/hederWelcome';
import ActivityIndicatorApp from '../../components/ActivityIndicatorApp';
import TextFadeAnim from '../../components/TextErrors/TextFadeAnim';

import ValidationIsNull from '../../utils/Validations/validationIsNull';
import EmailValidation from '../../utils/Validations/emailValidation';
import GetDataUser from '../../utils/Validations/AsyncStorage/GetDataUser';

import SignInImg from '../../assets/back/signInImg.svg';

export default function SignInScreen({ navigation }) {
	const [errMessage, setErrMessage] = useState({ text: '', anim: 'fadeOut' });
	const [active, setActive] = useState(true);
	const [isLoad, setIsLoad] = useState(false);

	const email = useRef({
		value: '',
		fieldName: 'Почта',
	});
	const password = useRef({
		value: '',
		fieldName: 'Пароль',
	});

	function isValidation() {
		try {
			const formValues = [email, password];

			for (const formValue of formValues) {
				const isValid =
					formValue.current.fieldName != 'Почта'
						? ValidationIsNull(formValue.current)
						: EmailValidation(formValue.current);
				if (!isValid.isValidation) {
					throw isValid.messErr;
				}
			}
			return true;
		} catch (e) {
			viewMessage(e.message, 3000);
			return false;
		}
	}

	function viewMessage(textMessage, timeout) {
		setErrMessage({ text: textMessage, anim: 'fadeIn' });
		setTimeout(() => {
			setErrMessage({ text: textMessage, anim: 'fadeOut' });
		}, timeout);
	}

	function SignIn() {
		if (!isValidation()) return; 
		
		setIsLoad(true);
		GetDataUser(email.current.value).then(dataJson => {
			dataObg = JSON.parse(dataJson);
			if(dataObg.password === password.current.value ){
				setActive(false);
				viewMessage('Успешно!', 5000);
			}else{
				viewMessage('Неверный пароль!', 3000);
				// setActive(true);
			}
		}).catch(error => {
			console.log('Ошибка при получении данных:', error, password.current.value);
			viewMessage('Данные не найдены!', 3000);
			// setActive(true);
		})
		setIsLoad(false);
	}

	return (
		<ScrollView>
			<View
				style={[
					stylesWelcome.mainContainerWelcome,
					stylesWelcome.mainFlex,
				]}
			>
				{isLoad && <ActivityIndicatorApp />}
				<HederWelcome />
				<Text style={stylesWelcome.titleText}>С возвращением!</Text>
				<SignInImg style={styles.image} />
				<View style={stylesWelcome.textInputContainer}>
					<TextFadeAnim
						text={errMessage.text}
						textColor={
							!errMessage.text.includes('Успешно') ? 'red' : 'green'
						}
						anim={errMessage.anim}
					/>
					<TextInput
						style={[
							stylesWelcome.textInput,
							!active ? stylesWelcome.textNoActive : null,
						]}
						onChangeText={textTextBox => {
							email.current = {
								value: textTextBox,
								fieldName: email.current.fieldName,
							};
						}}
						// value={email.current.value}
						editable={active}
						placeholder='Ваш email'
						inputMode='email'
						placeholderTextColor={'gray'}
						keyboardType='email-address'
						maxLength={50}
					/>
					<TextInput
						style={[
							stylesWelcome.textInput,
							!active ? stylesWelcome.textNoActive : null,
						]}
						onChangeText={textTextBox => {
							password.current = {
								value: textTextBox,
								fieldName: password.current.fieldName,
							};
						}}
						// value={password.current.value}
						editable={active}
						onSubmitEditing={SignIn}
						placeholder='Ваш пароль'
						inputMode='text'
						placeholderTextColor={'gray'}
						maxLength={50}
						secureTextEntry
					/>
					<Text
						onPress={() => {
							Alert.alert(
								'Внимание',
								'Действие пока не зарегестрировано!',
							);
						}}
						style={[stylesWelcome.btnElse, styles.btnElse]}
					>
						Забыли пароль
					</Text>
				</View>
				<View
					style={[
						stylesWelcome.BntAndElseTextContainer,
						stylesWelcome.mainFlex,
					]}
				>
					<TouchableOpacity
						onPress={SignIn}
						style={stylesWelcome.btnNext}
					>
						<Text style={stylesWelcome.btnText}>Войти</Text>
					</TouchableOpacity>
					<View style={[styles.containerElseText, glogalStyles.flex]}>
						<Text style={stylesWelcome.titleElseText}>
							Нет аккаунта?
						</Text>
						<Text
							onPress={() => {
								navigation.navigate('SignUpScreen');
							}}
							style={stylesWelcome.btnElse}
						>
							Зарегестрироватся
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		height: '15%',
		width: '50%',
	},
	btnElse: {
		marginBottom: 13,
		marginTop: 13,
	},
});
