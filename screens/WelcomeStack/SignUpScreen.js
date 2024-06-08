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
import glogalStyles from '../../styles/glogalStyles';

import HederWelcome from '../../components/hederWelcome';
import TextFadeAnim from '../../components/TextErrors/TextFadeAnim';
import ActivityIndicatorApp from '../../components/ActivityIndicatorApp';

import Validations from '../../utils/Validations';
import ValidationIsNull from '../../utils/Validations/validationIsNull';
import EmailValidation from '../../utils/Validations/emailValidation';
import PasswordsValidation from '../../utils/Validations/passwordsValidation';
import SetData from '../../utils/AsyncStorage/SetData';

export default function SignUpScreen({ navigation }) {
	const [errMessage, setErrMessage] = useState({ text: '', anim: 'fadeOut' });
	const [active, setActive] = useState(true);
	const [isLoad, setIsLoad] = useState(false);

	const timerMessage = useRef(null);
	const fullName = useRef({
		value: '',
		fieldName: 'Имя',
	});
	const email = useRef({
		value: '',
		fieldName: 'Почта',
	});
	const password = useRef({
		value: '',
		fieldName: 'Пароль',
	});
	const passwordConfirm = useRef({
		value: '',
		fieldName: 'Повтор пароля',
	});

	function Validation() {
		try {
			const formValues = [fullName, email, password, passwordConfirm];

			for (const formValue of formValues) {
				const isValid =
					formValue.current.fieldName != 'Почта'
						? ValidationIsNull(formValue.current)
						: EmailValidation(formValue.current);
				if (!isValid.isValidation) {
					throw isValid.messErr;
				}
			}

			const passwordValid = PasswordsValidation(
				password.current,
				passwordConfirm.current,
			);
			if (!passwordValid.isValidation) {
				throw passwordValid.messErr;
			}
		} catch (e) {
			viewMessage(e.message, 3000);
			return;
		}

		setIsLoad(true);
		setActive(false);
		try {
			SetData(email.current.value, {
				fullName: fullName.current.value,
				password: password.current.value,
			});
			SetData('USER_LOGIN_CHECK', {
				fullName: fullName.current.value,
				email: email.current.value,
				password: password.current.value,
			});
		} catch (error) {
			console.log(error);
			viewMessage('Ошибка загрузки!', 3000);
			setIsLoad(false);
			setActive(true);
			return;
		}
		viewMessage('Успешно загружено!', 5000);

		setTimeout(() => {
			setIsLoad(false);
			/* ---------Переходо на другую страницу (вероятно роутер)--------- */
		}, 2000);
	}

	function viewMessage(textMessage, timeout) {
		setErrMessage({ text: textMessage, anim: 'fadeIn' });

		if (timerMessage.current) clearTimeout(timerMessage.current);
		timerMessage.current = setTimeout(() => {
			setErrMessage({ text: textMessage, anim: 'fadeOut' });
		}, timeout);
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
				<View style={[styles.containerText, stylesWelcome.mainFlex]}>
					<Text style={stylesWelcome.titleText}>
						Добро пожаловать!
					</Text>
					<Text style={stylesWelcome.descriptionText}>
						Мы поможем вам выполнить поставленные задачи вовремя.
					</Text>
				</View>
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
							fullName.current = {
								value: textTextBox,
								fieldName: fullName.current.fieldName,
							};
						}}
						// value={fullName.current.value}
						editable={active}
						placeholder='Ваше полное имя'
						inputMode='text'
						placeholderTextColor={'gray'}
						maxLength={25}
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
						onSubmitEditing={Validation}
						placeholder='Ваш пароль'
						inputMode='text'
						placeholderTextColor={'gray'}
						maxLength={50}
						secureTextEntry
					/>
					<TextInput
						style={[
							stylesWelcome.textInput,
							!active ? stylesWelcome.textNoActive : null,
						]}
						onChangeText={textTextBox => {
							passwordConfirm.current = {
								value: textTextBox,
								fieldName: passwordConfirm.current.fieldName,
							};
						}}
						// value={passwordConfirm.current.value}
						editable={active}
						onSubmitEditing={Validation}
						placeholder='Подтверждение пароля'
						inputMode='text'
						placeholderTextColor={'gray'}
						maxLength={50}
						secureTextEntry
					/>
				</View>
				<View
					style={[
						stylesWelcome.BntAndElseTextContainer,
						stylesWelcome.mainFlex,
					]}
				>
					<TouchableOpacity
						disabled={!active}
						onPress={Validation}
						style={stylesWelcome.btnNext}
					>
						<Text
							style={[
								stylesWelcome.btnText,
								!active ? stylesWelcome.textNoActive : null,
							]}
							// style={stylesWelcome.btnText}
						>
							Зарегестрироваться
						</Text>
					</TouchableOpacity>
					<View style={[styles.containerElseText, glogalStyles.flex]}>
						<Text style={stylesWelcome.titleElseText}>
							Есть аккаут?
						</Text>
						<Text
							onPress={() => {
								navigation.navigate('SignInScreen');
							}}
							style={stylesWelcome.btnElse}
						>
							Войти
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	containerText: {
		width: '100%',
		height: '10%',
	},
});
