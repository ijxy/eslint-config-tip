[npm]: https://www.npmjs.com/package/eslint-config-tip

[![npm verison](https://img.shields.io/npm/v/eslint-config-tip)][npm]
[![npm bundle size](https://img.shields.io/bundlephobia/min/eslint-config-tip)][npm]
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-tip)][npm]

# eslint-config-tip

An opinionated ESLint config that combines rules for **t**ypescript, **i**mports and **p**rettier.


## Installation

```
npm install -D eslint eslint-config-tip
```

## Usage

```ts
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["tip"],
};
```