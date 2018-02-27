# parse-string-boolean [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Monitor][greenkeeper-image]][greenkeeper-url]

> Parse a string representation of a boolean.

* Case-insensitive
* Ignores leading and trailing whitespace
* Returns `null` if the string does not represent a boolean
* **Throws an error if input is not a string**


## Installation

[Node.js](http://nodejs.org/) `>= 6` is required. To install, type this at the command line:
```shell
npm install parse-string-boolean
```


## Usage

`parseBoolean(string[, defaultValue])`

```js
const parseBoolean = require('parse-string-boolean');

parseBoolean('true');  //-> true
parseBoolean(' TRUE ');  //-> true
parseBoolean('false');  //-> false

parseBoolean('yes');  //-> null
parseBoolean('1');  //-> null
parseBoolean('');  //-> null
```

Optionally, you can override the default value for strings that do not represent a boolean:
```js
parseBoolean('', true);  //-> true
```


[npm-image]: https://img.shields.io/npm/v/parse-string-boolean.svg
[npm-url]: https://npmjs.com/package/parse-string-boolean
[travis-image]: https://img.shields.io/travis/stevenvachon/parse-string-boolean.svg
[travis-url]: https://travis-ci.org/stevenvachon/parse-string-boolean
[greenkeeper-image]: https://badges.greenkeeper.io/stevenvachon/parse-string-boolean.svg
[greenkeeper-url]: https://greenkeeper.io/
