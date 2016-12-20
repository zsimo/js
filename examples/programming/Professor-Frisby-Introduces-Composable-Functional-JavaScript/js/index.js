/**
 * Created by simonesacchi on 19/12/2016.
 */


(function () {

    "use strict";


    //var Box = function Box(x) {
    //    return {
    //        map: function map(f) {
    //            return Box(f(x));
    //        }
    //    };
    //};

    var Box = function (x) {

        return {
            map : function (callback) {
                return Box(callback(x));
            },
            fold : function (callback) {
                return callback(x);
            },
            inspect : function () {
                return Box(x);
            }
        };

    };



    var test = function (str) {
        return Box(str)
            .map(function (s) {
                return s.trim();
            })
            .map(function (r) {
                return new Number(r);
            })
            .map(function (i) {
                return i + i;
            })
            .map(function (i) {
                String.fromCharCode(i);
            })
            .fold(function (c) {
                return c.toLowerCase();
            });
    };

    console.log(Box("eess").inspect());


}());