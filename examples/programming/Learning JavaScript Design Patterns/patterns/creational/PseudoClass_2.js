/**
 * Created by simonesacchi on 28/10/2017.
 */

// see https://www.freecodecamp.org/challenges/make-object-properties-private


var Car = function() {
    // this is a private variable
    var speed = 10;

    // these are public methods
    this.accelerate = function(change) {
        speed += change;
    };

    this.decelerate = function() {
        speed -= 5;
    };

    this.getSpeed = function() {
        return speed;
    };
};

var Bike = function() {

    // Only change code below this line.

};

var myCar = new Car();

var myBike = new Bike();
