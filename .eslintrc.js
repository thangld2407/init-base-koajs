module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'consistent-return': 2,
    indent: [1, 2],
    'no-else-return': 1,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'space-unary-ops': 2,
  },
};
