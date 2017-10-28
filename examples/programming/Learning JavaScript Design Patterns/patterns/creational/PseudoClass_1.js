// https://frontendmasters.com/courses/data-structures-algorithms/defining-a-class

function test () {
    // this = {}
    this.uno = "uno";
    // return this;
}

var a = new test();
var b = test();

console.log(a); // {uno:"uno"}
console.log(b); // undefined

// the keyword new create an empty object this and return it