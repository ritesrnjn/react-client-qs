module.exports = {
  parser: "babel-eslint",
  extends: [
    "standard",
    "standard-react",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/flowtype",  // if you are using flow
    "prettier/react"
  ],
  plugins: [
    "babel",
    "react",
    "promise",
    "jsx-a11y",
    "prettier"
  ],
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true
  },
  globals: {
    "__DEV__": false,
    "__TEST__": false,
    "__PROD__": false,
    "__COVERAGE__": false
  },
  rules: {
    "key-spacing": "off",
    "max-len": [2, 120, 2],
    "comma-dangle": "off",
    "prefer-promise-reject-errors": "off",
    "prettier/prettier": "error"
  }
}
