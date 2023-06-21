module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
   plugins: [
    'unused-imports',
    'prettier',
    'eslint-plugin-prefer-arrow',
    'react-refresh',
  ],
  root: true,
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react-refresh/only-export-components': 'warn',
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-shadow': [
      'warn',
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    'react/prefer-stateless-function': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'react/require-default-props': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'eol-last': ['error', 'always'],
  },
  overrides: [
    {
      files: ['*.test.tsx'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
