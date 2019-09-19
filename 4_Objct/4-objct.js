'use strict';

const createUser = (nme, cty) => {
  return {name: nme, city: cty};
};

const u1 = createUser('Markus Aurelius', 'Roma')
const u2 = createUser('Markus Aurelius')
console.dir(u1);
console.dir(u2);

//replace name value
u1.name = 'Julius Cesar';
u2.name = 'Ramses';

console.dir(u1);
console.dir(u2);

//u1 and u2 are const - immutable
//u1 = createUser('Markus Aurelius Modif', 'Romania')
//u2 = createUser('Markus Aurelius Modif')
