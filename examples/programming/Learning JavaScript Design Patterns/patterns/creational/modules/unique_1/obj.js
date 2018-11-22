"use strict";

// unique instances

module.exports = function () {
    return {
        a: 0,
        increment: function () {
            this.a ++;
        }
    };
};