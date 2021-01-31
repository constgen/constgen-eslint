# @constgen/eslint

This is a preset of ESLint rules that extend and override [@atomspace/eslint](https://github.com/atomspace/atomspace-eslint) Neutrino preset

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
[![Build Status][build-status]][travis-url]

```bash
npm install --save-dev neutrino eslint @constgen/eslint
```

#### .neutrinorc.js

```js
let eslint = require('@constgen/eslint')

module.exports = {
   use: [
      eslint({
         eslint: {
            env: { node: true }
         }
      })
   ]
}
```

#### package.json

```json
{
   "scripts": {
      "eslint": "eslint ./",
      "test"  : "npm run eslint -- --max-warnings 0",
      "lint"  : "npm run eslint -- --fix"
   }
}
```

#### .eslintrc.js

```js
let neutrino = require('neutrino')

module.exports = neutrino().eslintrc()
```

#### .vscode/settings.json

```json
{
   "editor.insertSpaces"     : false,
   "editor.detectIndentation": false,
   "jshint.enable"           : false,
   "eslint.enable"           : true,
   "editor.formatOnSave"     : false,
   "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
   },
   "javascript.format.enable"  : true,
   "javascript.validate.enable": false,
   "files.eol"                 : "\n",
   "files.insertFinalNewline"  : false,
   "[markdown]"                : {
      "editor.tabSize"     : 3,
      "editor.insertSpaces": true
   },
   "eslint.options": {
      "extensions"              : [".js", ".jsx", ".html", ".md", ".vue", ".json", ".jsonc", ".json5", ".json6"],
      "resolvePluginsRelativeTo": "./node_modules/.pnpm"
   },
   "eslint.validate"          : ["javascript", "javascriptreact", "html", "markdown", "vue", "json", "jsonc", "json5", "json6"],
   "vetur.validation.template": false
}
```

[npm-image]: https://img.shields.io/npm/v/@constgen/eslint.svg
[npm-downloads]: https://img.shields.io/npm/dt/@constgen/eslint.svg
[npm-url]: https://npmjs.org/package/@constgen/eslint
[build-status]: https://travis-ci.com/constgen/constgen-eslint.svg?branch=master
[travis-url]: https://travis-ci.com/constgen/constgen-eslint
