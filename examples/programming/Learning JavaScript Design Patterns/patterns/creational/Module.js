"use strict";

var testModule = (function () {

    var counter = 0;
    function doSomethingPrivate() {
        //...
    }

    return {

        // Public alias to a private function
        doSomething: doSomethingPrivate,

        incrementCounter: function () {
            counter ++;
        },
        getCounter : function () {
            return counter;
        },

        resetCounter: function () {
            console.log( "counter value prior to reset: " + counter );
            counter = 0;
        }
    };

})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
//testModule.resetCounter();


// both point to the same object
var singleton01 = testModule;
var singleton02 = testModule;
singleton01.incrementCounter();
console.log(singleton01.getCounter());
console.log(singleton02.getCounter());