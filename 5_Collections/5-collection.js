'use strict';

const dir = [{name: 'Alex', phone: '+79023453356'},];
dir.push({name:'Will', phone:'+77904845678'});
dir.push({name:'Bill', phone:'+89083456787'});
dir.push({name:'Dill', phone:'+99018978675'});
dir.push({name:'Nill', phone:'+09048598989'});

//!!!!find only one 
const findPhoneByName = name => {
  for (const itm of dir) {
    if (itm.name.toUpperCase() === name.toUpperCase()){
      return itm.phone;
    }
  }
  return 'Not in dir';
};

console.log(findPhoneByName('Will'));
console.log(findPhoneByName('Bill'));
console.log(findPhoneByName('NiLL'));
console.log(findPhoneByName('dill'));
console.log(findPhoneByName('Alex'));
console.log(findPhoneByName('noIndir'));


//dir use hash
console.log("\n\nSearch by hash table....")
const dirHash = {Alex: {phone: '+79023453356'},
	    Will: {phone: '+77904845678'},
	    Bill: {phone: '+89083456787'},
	    Dill: {phone: '+99018978675'},
	    Nill: {phone: '+09048598989'},
	    };

const findPhoneByNameH = name => {
  for (const itm in dirHash) {
    if (itm.toUpperCase() === name.toUpperCase()){
      return dirHash[itm].phone;
    }
  }
  return 'Not in dir';
};

console.log(findPhoneByNameH('DDDD'));
console.log(findPhoneByNameH('Will'));
console.log(findPhoneByNameH('BiLL'));
console.log(findPhoneByNameH('NiLL'));
console.log(findPhoneByNameH('Dill'));
console.log(findPhoneByNameH('ALEX'));

