/**
 * Created by Simone.Sacchi on 28/04/2017.
 */

"use strict";

class MyPlugin {
    //constructor() {
    //    /**
    //     * Part 1.0
    //     * Constructors on webpack plugins are optional.
    //     * They are only needed if you are planning on allowing your user to pass options.
    //     *
    //     */
    //    console.log("*********");
    //}

    apply(compiler) {
        /**
         * Part 2
         * How to hook.
         */
        compiler.plugin("run", (compiler, callback) => {
            console.log("run");
            callback();
        });
        compiler.plugin("watch-run", (compiler, callback) => {
            console.log("watch-run");
            callback();
        });
        compiler.plugin("done", (compiler) => {
            console.log("done");
        });
    }

}

module.exports = MyPlugin;