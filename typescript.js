/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:@typescript-eslint/strict",
  ],
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/prefer-enum-initializers": ["error"],
  },
};
