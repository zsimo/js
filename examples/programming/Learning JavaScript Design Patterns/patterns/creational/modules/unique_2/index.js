"use strict";


var obj1 = Object.create(require("./obj"));
var obj2 = Object.create(require("./obj"));
obj1.increment();
console.log(obj1);
console.log(obj2);