// 29:38
// CommonJS, every file is module (by default)
// Modules, Encapsulated Code (only share minimum)
const names = require('./04names.js')
const sayHi = require('./05utils.js')
const data = require('./06app.js')

require('./07app.js')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)