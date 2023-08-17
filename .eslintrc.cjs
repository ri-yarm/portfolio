// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["/src/assets/animation/*.json"],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};