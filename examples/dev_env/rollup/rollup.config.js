/**
 * Created by Simone.Sacchi on 23/12/2016.
 */

import babel from "rollup-plugin-babel";

export default {
    entry : "examples/rollup/src/js/index.js",
    dest : "examples/rollup/public/js/index.js",
    format : "iife",
    sourceMap : "inline",
    plugins : [
        babel ({
            exclude : "node_modules/**"
        })
    ]
};