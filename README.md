# @carp-dk/eslint-config

This is our ESLint config used across our frontend JavaScript and TypeScript projects, including our React web apps and API wrapper.

## Installation

To install this package, run the following command:

```sh
bun i -D @carp-dk/eslint-config
```

## Usage
In your `.eslintrc.js` file, extend our config:

```js
module.exports = {
 parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
  },
  extends: '@carp-dk'
};
```

Make a `.prettierrc.js` file:
```js
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-organize-imports'],
};
```

## ESLint Rules Explanation

In our ESLint configuration, we use several plugins to enforce specific coding standards and practices. Here's a brief explanation of what each plugin does:

- `unused-imports`: This plugin helps to identify any imports that are not being used in the code. It helps to keep the code clean and efficient by removing unnecessary imports.

- `prettier`: This plugin integrates Prettier with ESLint. Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.

- `eslint-plugin-prefer-arrow`: This plugin enforces the use of arrow functions over traditional function expressions where possible. Arrow functions provide a more concise syntax and lexically bind the `this` value.

- `react-refresh`: This plugin is used for fast refresh functionality in React applications. It helps to preserve the React state between hot reloads.

- `eslint-plugin-react`: This plugin provides specific linting rules for React and JSX syntax to enforce best practices.

- `eslint-plugin-react-hooks`: This plugin enforces the rules of Hooks. Hooks are a new addition in React that lets you use state and other React features without writing a class.

- `eslint-plugin-react-refresh`: This plugin is used for fast refresh functionality in React applications. It helps to preserve the React state between hot reloads.

- `eslint-plugin-unused-imports`: This plugin helps to identify any imports that are not being used in the code. It helps to keep the code clean and efficient by removing unnecessary imports.
