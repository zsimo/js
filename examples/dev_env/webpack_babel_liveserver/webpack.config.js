module.exports = {
    entry: './src/app.js',
    output: {
        path: './public/js',
        filename:'index.js'
    },
    module: {
        loaders: [{
            exclude: '/node_modules/',
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
}