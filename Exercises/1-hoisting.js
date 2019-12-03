'use strict';

const fn = () => {console.log(b); const a = 5; var b = 3; return a;};
fn();

module.exports = { fn };
