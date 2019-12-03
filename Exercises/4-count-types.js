'use strict';

const countTypesInArray = null;
let b = {};
for(let element of countTypesInArray) {
  let t = typeof(element);
  if (b[t] === undefined)
    b[t] = 1;
  else
    b[t]++;
}
console.log(b);

module.exports = { countTypesInArray };
