# StatcastJS

[![TypeScript version][ts-badge]][typescript-4-3]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

A javascript library for Statcast data. 

## Getting Started

This project is intended to be used with the latest release of [Node.js 16][nodejs].

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/NelsonJTSM/StatcastJS/
cd StatcastJS
yarn install
```

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## License

Licensed under the APLv2. See the [LICENSE][license] file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.3-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js-%3E=%2016.6-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v16.x/docs/api/
[gha-badge]: https://github.com/NelsonJTSM/StatcastJS/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/NelsonJTSM/StatcastJS/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-4-3]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/NelsonJTSM/StatcastJS/blob/main/LICENSE
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[gh-actions]: https://github.com/features/actions
