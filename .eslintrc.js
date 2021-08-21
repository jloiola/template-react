module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    "jest/globals": true,
  },
  globals: {},
  plugins: ["unicorn", "jest", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
  ],
  parserOptions: {
    requireConfigFile: false,
    sourceType: "module",
    ecmaVersion: 2019,
  },
  ignorePatterns: ["docs/", "dist/"],
  settings: {},
  rules: {
    "no-var": ["error"],
    "linebreak-style": ["error", "unix"],
    "unicorn/prevent-abbreviations": ["off"],
  },
};
