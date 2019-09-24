'use strict';

const arrTypes = [true, 'hello', 5, 12, 1.3, -200, false, false, 'w'];
const arrTypesBig = [true, 'hello', 5, 12, 1.3,
  -200, false, false, 'w', 3456789999];

const cntTypes = { number: 0, string: 0, boolean: 0 };
const dynTypes = {};

for (const itm of arrTypes) {
  cntTypes[(typeof itm)] += 1;
}

console.log(cntTypes);


for (const itm of arrTypesBig) {
  if (!Object.keys(dynTypes).includes(typeof itm)) {
    dynTypes[(typeof itm)] = 1;
  } else {
    dynTypes[(typeof itm)] += 1;
  }
}

console.log(dynTypes);
