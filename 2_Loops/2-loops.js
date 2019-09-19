'use strict';

//return array of given range
const range = (s, e) => {
  const arrRange = [];
  for (let i = s; i <= e; i++) {
    arrRange.push(i);
  }
  return arrRange;
};

console.log(range(15, 30));

//return odd

const rangeOdd = (s, e) => {
  const arrRange = [];
  for (let i = s; i <= e; i++) {
    if (i % 2 !== 0) {
      arrRange.push(i);
    }
  }
  return arrRange;
};

console.log(rangeOdd(15, 30));
