# @carp-dk/eslint-config

This is our ESLint config used across our frontend JavaScript and TypeScript projects, including our React web apps and API wrapper.

## Installation

To install this package, run the following command:

```sh
bun i -D @carp-dk/eslint-config
```

## Publishing package
We have a GitHub workflow for doing this. Bump the `package.json` to the desired version, then create a release on GitHub, which will trigger the workflow for you.

Note: the NPM token is set in the [https://github.com/cph-cachet/eslint-config/settings/secrets/actions](GitHub secrets section) and has an expiry date, after which a new token needs to be created and updated.

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
export default [{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "plugins": [import.meta.resolve('prettier-plugin-organize-imports')]
}]
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
