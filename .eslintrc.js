module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 2017
  },
  extends: [
    'airbnb-base'
  ],
  rules: {
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'arrow-parens': ['error', 'always'],
  },
};
