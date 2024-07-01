import ValidationIsNull from './validationIsNull';

export default function EmailValidation(strOrig) {
	const validIsNull = ValidationIsNull(strOrig);

	if (!validIsNull.isValidation) {
		return validIsNull;
	}

	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	if (!EMAIL_REGEXP.test(strOrig.value.trim())) {
        return {
			isValidation: false,
			messErr: new Error(`Поле ${strOrig.fieldName} не соответствует email!`),
		};
	}

	return {
		isValidation: true,
		messErr: '',
	};
}
