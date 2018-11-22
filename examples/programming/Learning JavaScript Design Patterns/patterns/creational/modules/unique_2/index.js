"use strict";


// Object.create returns always an EMPTY object, with the prototype bounds to the
// object passed as parameter
var obj1 = Object.create(require("./obj"));
var obj2 = Object.create(require("./obj"));
obj1.increment();
console.log(obj1);
console.log(obj2);