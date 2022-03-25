module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["prettier", "react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": ["error"],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": [0],
    "react/prefer-stateless-function": [1],
    "react/static-property-placement": [1, "property assignment"],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
  },
};
