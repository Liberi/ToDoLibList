import React from 'react'

export default function PasswordsValidation(passwordOld, passwordNew) {
	if (passwordOld.value.trim() !== passwordNew.value.trim()) {
		return {
			isValidation: false,
			messErr: new Error(`Поле ${passwordOld.fieldName} Не равно ${passwordNew.fieldName}!`),
		};
	}
	return {
		isValidation: true,
		messErr: '',
	};
}
