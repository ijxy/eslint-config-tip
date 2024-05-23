/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:import/recommended", "plugin:import/typescript"],
  settings: {
    "import/resolver": { typescript: true, node: true },
  },
  rules: {
    "import/no-anonymous-default-export": ["error"],
    "import/no-cycle": ["error"],
    "import/no-duplicates": ["error"],
    "import/no-extraneous-dependencies": ["error"],
    "import/no-mutable-exports": ["error"],
    "import/no-self-import": ["error"],
    "import/no-useless-path-segments": ["error"],
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: ["unknown", "builtin", "external", "internal", "parent", "sibling"],
        "newlines-between": "always",
      },
    ],
  },
};
