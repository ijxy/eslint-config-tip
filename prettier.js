/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", { printWidth: 100 }],
  },
};
