/**
 * Created by simonesacchi on 11/03/2017.
 */


"use strict";



// handle event
window.addEventListener("optimizedResize", function() {
    window.draw();
});

if (window.setUpMainColor && typeof window.setUpMainColor === "function") {
    window.setUpMainColor();
}

window.draw();
