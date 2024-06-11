import React, { useRef, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	ScrollView,
} from 'react-native';

import stylesWelcome from './styles';
import { glogalStyles } from '../../styles';
import { SignInImg } from '../../assets/back';

import { ActivityIndicatorApp, HederWelcome } from '../../components';
import { TextFadeAnim } from '../../components/TextErrors';

import { ValidationIsNull, EmailValidation } from '../../utils/Validations';
import { SetData, GetData } from '../../utils/AsyncStorage';
import { UserData } from '../../store';

export default function SignInScreen({ navigation }) {
	const [errMessage, setErrMessage] = useState({ text: '', anim: 'fadeOut' });
	const [active, setActive] = useState(true);
	const [isLoad, setIsLoad] = useState(false);

	const timerMessage = useRef(null);
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

		if (timerMessage.current) clearTimeout(timerMessage.current);
		timerMessage.current = setTimeout(() => {
			setErrMessage({ text: textMessage, anim: 'fadeOut' });
		}, timeout);
	}

	function SignIn(isFogotPassword = false) {
		if (!isValidation()) return;

		setIsLoad(true);
		GetData(email.current.value)
			.then(dataJson => {
				dataObg = JSON.parse(dataJson);

				if (isFogotPassword) {
					FogotPassword(dataObg.password);
					return;
				}

				if (dataObg.password === password.current.value) {
					SetData('USER_LOGIN_CHECK', {
						fullName: dataObg.fullName,
						email: email.current.value,
						password: password.current.value,
					}).then(() => {
						setActive(false);
						viewMessage('Успешно загружено!', 5000);

						setTimeout(() => {
							setIsLoad(false);
							UserData.setIsRegistration(true);
							/* ---------Переходо на другую страницу (вероятно роутер)--------- */
						}, 3000);
					});
				} else {
					viewMessage('Неверный пароль!', 3000);
					setIsLoad(false);
				}
			})
			.catch(err => {
				console.log('Ошибка при получении данных:', err);
				viewMessage('Данные не найдены!', 3000);
				setIsLoad(false);
			});
	}

	function FogotPassword(password) {
		viewMessage(`Успешно, ваш пароль: ${password}`, 10000);
		setIsLoad(false);
		setActive(true);
	}

	return (
		<ScrollView>
			<View
				style={[
					stylesWelcome.mainContainerWelcome,
					stylesWelcome.mainFlex,
				]}
			>
				{<ActivityIndicatorApp isActive={isLoad} />}
				<HederWelcome />
				<Text style={stylesWelcome.titleText}>С возвращением!</Text>
				<SignInImg style={styles.image} />
				<View style={stylesWelcome.textInputContainer}>
					<TextFadeAnim
						text={errMessage.text}
						textColor={
							!errMessage.text.includes('Успешно')
								? 'red'
								: 'green'
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
						onSubmitEditing={() => {
							SignIn();
						}}
						placeholder='Ваш пароль'
						inputMode='text'
						placeholderTextColor={'gray'}
						maxLength={50}
						secureTextEntry
					/>
					<Text
						onPress={() => {
							SignIn(true);
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
						disabled={!active}
						onPress={() => {
							SignIn();
						}}
						style={stylesWelcome.btnNext}
					>
						<Text
							style={[
								stylesWelcome.btnText,
								!active ? stylesWelcome.textNoActive : null,
							]}
							// style={stylesWelcome.btnText}
						>
							Войти
						</Text>
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
