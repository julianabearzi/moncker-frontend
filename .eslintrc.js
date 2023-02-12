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
    'no-undef': 'off',
    camelcase: ['error', { properties: 'never' }],
  },
};
