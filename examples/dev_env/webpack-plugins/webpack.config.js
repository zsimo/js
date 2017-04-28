const path = require("path");
const webpack = require("webpack");

const MyPlugin = require("./plugins/MyPlugin.js");

module.exports = {
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].chunk.js"
    },
    plugins: [
        new MyPlugin()
    ]
};