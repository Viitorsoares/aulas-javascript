const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
        wello: './src/wello.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.min.js'
    }
}