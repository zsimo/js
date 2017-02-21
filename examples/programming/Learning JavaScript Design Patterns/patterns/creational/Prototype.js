/**
 * Created by simonesacchi on 21/02/2017.
 */

"use strict";

var myCar = {

    name: "Ford Escort",

    drive: function () {
        console.log( "Weeee. I'm driving!" );
    },

    panic: function () {
        console.log( "Wait. How do you stop this thing?" );
    }

};

// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar, {
    name : {
        value : "test" // read_only by default
    }
});
//yourCar.name = "new2"; -> gives error

var yourCar2 = Object.create( myCar);
yourCar2.name = "nuovo test";

// a copy by reference
//var myCarClone = myCar;
//myCarClone.name = "mini";

console.log(myCar);
//console.log(myCarClone);
console.log(yourCar);
console.log(yourCar2);


//function Foo() {}
//var a1 = new Foo();
//console.log(a1);