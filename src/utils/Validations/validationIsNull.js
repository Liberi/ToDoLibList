export default function ValidationIsNull(strOrig) {
	const strValidate = strOrig.value.trim();

	if (strValidate === '') {
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
