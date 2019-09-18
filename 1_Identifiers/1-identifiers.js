'use strict';

const a = 'Alexandr';
const bd = 1981;

const hello = name => (
  console.dir(`Hello ${name}! Your birthyear is ${bd}.`)
);

hello(a);
