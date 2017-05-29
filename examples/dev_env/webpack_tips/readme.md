- Passing variables to the source file  (helpful test)
    ```javascript
    var currentView = require("imports?pippo=>'pippo',due=>2!views/backbone/table");
    ```
- Plugins usage
    ```javascript
    plugins: [
        new webpack.ProvidePlugin({
            "window.moment": "moment"
        }),
        new BowerWebpackPlugin()
    ]
    ```

- Passing environment-dependent variables in webpack [see]( http://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack)
    ```javascript
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
    ```

- del-cli usage via npm script
    ```javascript
    "prebuild" : "del-cli dist -f"
    ```

- Webpack usefull option
    ```javascript
    --display-error-details
    ```

- Pass parameter to webpack by running
    ```javascript
    webpack --env.cache
    ```
    ```javascript
    module.exports = env => ({
    output: {
        filename: env.cache ? "[chunkhash].js" : "bundle.js", 📲
        chunkFilename: env.cache ? "[chunkhash].js" : "[id].chunk.js" 📲
        }
    })
    ```

- Strip Unused CSS [see](https://laracasts.com/series/webpack-for-everyone/episodes/10)
