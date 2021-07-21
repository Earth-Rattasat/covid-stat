module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  plugins: ["prettier", "react"],
  extends: [
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    "max-len": ["error", { code: 100 }],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["off"],
    "no-return-assign": ["off"],
    "prettier/prettier": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
