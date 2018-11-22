"use strict";


// see https://frontendmasters.com/courses/object-oriented-js/object-create/

/**
 * Qualsiasi parametro si passi, ritorna sempre un oggetto vuoto.
 *
 * @type {any} empty object
 */
var myObj = Object.create(null);


myObj.name = "pippo";
myObj.score = 5;
myObj.increment = function () {
    myObj.score ++;
};