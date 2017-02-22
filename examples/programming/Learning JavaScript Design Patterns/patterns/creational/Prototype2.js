/**
 * Created by Simone.Sacchi on 22/02/2017.
 */
"use strict";

var myCar;

(function () {

    var _priv;

    myCar = {

        name: "Ford Escort",

        drive: function () {
            console.log( "Weeee. I'm driving!" );
        },


        get : function () {
            return _priv;
        },


        set : function (priv) {
            _priv = priv;
        },

        panic: function () {
            console.log( "Wait. How do you stop this thing?" );
        }

    };
}());



var yourCar_1 = Object.create(myCar);
var yourCar_2 = Object.create(myCar);


// private variables are shared between instance
yourCar_1.set("****");

console.log(yourCar_1.get());
console.log(yourCar_2.get());