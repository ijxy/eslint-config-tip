/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./typescript.js", "./import.js", "./prettier.js"],
  reportUnusedDisableDirectives: true,
  rules: {
    curly: ["error"],
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
  },
};
