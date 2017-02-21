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

console.log(myCar);
console.log(yourCar);


function Foo() {}
var a1 = new Foo();
console.log(a1);