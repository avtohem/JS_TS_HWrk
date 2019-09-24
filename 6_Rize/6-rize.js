//decline use strict 4 use hoist
//'use strict';

const rizeFun = () => {
  console.log(rizedVar);
  //use ver 4 use hoist 
  var rizedVar = 'Use before declare';
};

rizeFun();
