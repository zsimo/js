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
            return counter++;
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
testModule.resetCounter();