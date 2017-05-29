- DefinePlugin: create global constants which can be configured at compile time
    ```javascript
    new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true),
        VERSION: JSON.stringify("5fa3b9"),
        BROWSER_SUPPORTS_HTML5: true,
        TWO: "1+1",
        "typeof window": JSON.stringify("object")
    })
    ```

    ```javascript
    console.log("Running App version " + VERSION);
    if(!BROWSER_SUPPORTS_HTML5) require("html5shiv");
    ```



- ProvidePlugin: Automatically loaded modules
    ```javascript
    new webpack.ProvidePlugin({
        $: "jquery"
    })
    ```

    ```javascript
    // in a module
    $("#item") // <= just works
    // $ is automatically set to the exports of module "jquery"
    ```


- HtmlWebpackPlugin: Generates a solid base html page for your web application with all your webpack generated css and js files built in
    ```javascript
    HtmlWebpackPlugin = require('html-webpack-plugin');
    new HtmlWebpackPlugin({ title: 'Webpack App' })
    ```


- WebpackShellPlugin: Fires shell commands before and after webpack builds
    ```javascript
    new WebpackShellPlugin({
      onBuildStart: ['echo "Starting"'],
      onBuildEnd: ['python pi.py', 'node openBrowser.js', 'haxe game.hx && ssh -i /myPems/key.pem BObama@healthcare.gov']
    })
    ```

- Webpack Manifest Plugin: plugin for generating an asset manifest
    ```javascript
    var ManifestPlugin = require('webpack-manifest-plugin');
    module.exports = {
        // ...
        plugins: [
          new ManifestPlugin()
        ]
    };
    ```
    ```json
    {
      "mods/alpha.js": "mods/alpha.1234567890.js",
      "mods/omega.js": "mods/omega.0987654321.js"
    }
    ```
