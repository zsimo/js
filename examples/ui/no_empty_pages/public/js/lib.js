/**
 * Created by simonesacchi on 11/03/2017.
 */

"use strict";
// https://developer.mozilla.org/en-US/docs/Web/Events/resize
(function() {
    var throttle = function(type, name) {
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                window.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        window.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();


function setUpSvgDimension (id, width, height) {
    var svg = document.getElementById(id);
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
}