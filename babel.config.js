module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
		[
			'module:react-native-dotenv',
			{
				moduleName: '@env',
				path: '.env',
				safe: false,
				systemvars: true,
				allowUndefined: true,
			},
		],
	],
};
