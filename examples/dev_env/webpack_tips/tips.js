

// TODO passing variables to the source file  (helpful test)
var currentView = require("imports?pippo=>'pippo',due=>2!views/backbone/table");


plugins: [
    new webpack.ProvidePlugin({
        "window.moment": "moment"
    }),
    new BowerWebpackPlugin()
]




// Passing environment-dependent variables in webpack
// http://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
}),



// use  del-cli
// "prebuild" : "del-cli dist -f"



// --display-error-details