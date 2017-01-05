

// TODO passing variables to the source file  (helpful test)
var currentView = require("imports?pippo=>'pippo',due=>2!views/backbone/table");


plugins: [
    new webpack.ProvidePlugin({
        "window.moment": "moment"
    }),
    new BowerWebpackPlugin()
]