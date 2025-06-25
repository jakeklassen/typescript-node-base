import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import * as depend from 'eslint-plugin-depend';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: [
			'!**/.mocharc.cjs',
			'**/node_modules',
			'**/build',
			'**/dist',
			'**/public',
		],
	},
	{
		plugins: {
			prettierPlugin,
			typescriptEslintPlugin,
		},

		languageOptions: {
			globals: {
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 2024,
			sourceType: 'module',

			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},

		rules: {
			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/camelcase': 'off',
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-unnecessary-condition': 'warn',
			'no-unused-vars': 'off',

			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
		},
	},
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.stylistic,
	prettierConfig,
	depend.configs['flat/recommended'],
);
