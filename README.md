# jif [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Information

- Dead simple ternary or if/else replacement.
- All arguments (conditions, ifTrue, and ifFalse) can be either a value or a function which returns a value.
- Super useful for cleaning up JSX, which doesn't allow use of if/else.

## Install

```
npm install jif --save
```
## jif(condition[, ifTrue, ifFalse])

### ES6

```js
import jif from 'jif'

const truthy = true
const falsey = false

// lets get started with some primitives...
jif(truthy, 123, 456) // 123
jif(falsey, 123, 456) // 456

// and now some functions!
jif(truthy, () => 123) // 123
jif(falsey, () => 123) // undefined
```

### ES5

```js
var jif = require('jif');

var truthy = true;
var falsey = false;

// lets get started with some primitives...
jif(truthy, 123, 456); // 123
jif(falsey, 123, 456); // 456

// and now some functions!
jif(truthy, function(){
  return 123;
}); // 123
jif(falsey, function(){
  return 123;
}); // undefined
```

[downloads-image]: http://img.shields.io/npm/dm/jif.svg
[npm-url]: https://npmjs.org/package/jif
[npm-image]: http://img.shields.io/npm/v/jif.svg
