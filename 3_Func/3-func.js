'use strict';

//average

const average = (oneItm, secItm) => {
  const aver = (oneItm + secItm) / 2;
  return aver;
};

console.log(average(2, 3));

//square

const pwr = x => {
  x *= x;
  return x;
};

console.log('power x = ' + pwr(3));

//cube

const cbe = x => {
  x *= x * x;
  return x;
};

console.log('cube x = ' + cbe(3));

//calculations

const calculate = () => {

  const resArr = [];
  for (let i = 0; i <= 9; i++) {
    resArr.push(average(pwr(i), cbe(i)));
  }
  return resArr;
};

console.log('result Array ' + calculate());
