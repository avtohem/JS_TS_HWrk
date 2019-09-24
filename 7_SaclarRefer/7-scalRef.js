'use strict';

//const inc = a => a;

//const a = 5;
//const b = inc(a);
//console.dir({ a, b });

const inc = obj => {
  obj.num = 7;
  return obj;
};

const obj = { num: 5 };

console.log(obj);
inc(obj);
console.log(obj);
