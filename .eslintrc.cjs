module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier', 'unicorn'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
