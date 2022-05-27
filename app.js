const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
const otherItems = _.flatten(items)

console.log(newItems)
console.log(otherItems)