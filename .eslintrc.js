module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['.eslintrc.js', 'tsconfig.json'],
	rules: {
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
	},
};
