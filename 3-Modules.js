// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is module (by default)

const names = require('./3-Names');
const sayHi = require('./3-Utils');
const data = require('./4-Alternative-Module-Syntax');
require('./5-Mind-Grenade')
console.log(names);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

