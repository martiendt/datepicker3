module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint',
    allowImportExportEverywhere: false,
  },
}