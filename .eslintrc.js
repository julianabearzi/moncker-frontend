module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    chartDays: 'readonly',
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'no-undef': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'prefer-const': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/label-has-for': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'default-param-last': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'import/no-named-as-default': 0,
    'no-unused-vars': [
      'error',
      { args: 'none', ignoreRestSiblings: true, varsIgnorePattern: 'ChartJS' },
    ],
    camelcase: ['error', { properties: 'never' }],
  },
};
