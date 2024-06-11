import React from 'react';

export default function ValidationIsNull(strOrig) {
	// console.log(strOrig);
	const strValidate = strOrig.value.trim();

	if (strValidate === '') {
		// console.log('strOrig', strOrig);
		return {
			isValidation: false,
			messErr: new Error(`Поле ${strOrig.fieldName} оказалось пустым!`),
		};
	}
	return {
		isValidation: true,
		messErr: '',
	};
}
