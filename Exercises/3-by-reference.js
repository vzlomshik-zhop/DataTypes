'use strict';

const inc = function (obj) {
  obj.n++;
};

const a = {n: 5};
inc(a);
console.log(a);
module.exports = { inc };
