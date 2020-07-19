module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 0,
    quotes: [2, 'single', { avoidEscape: true }],
  },
};
