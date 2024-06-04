module.exports = {
	root: true,
	extends: ['@react-native-community', 'prettier'],
	env: { es6: true },
	rules: {
		semi: ['error', 'always'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-mixed-spaces-and-tabs': ['error'],
		'object-curly-spacing': ['error', 'always'],
		// 'brace-style': ['error', 'allman'],
		'brace-style': ['error', 'stroustrup'],
		curly: ['error', 'multi-line'],
		'no-trailing-spaces': ['error', { skipBlankLines: true }],
		'react/jsx-curly-brace-presence': ['error', { props: 'always' }],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true,
			globalReturn: true,
		},
	},
};
