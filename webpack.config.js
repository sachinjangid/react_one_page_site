var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/components/index.js',
    output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
    },
    module: {
	rules: [
	  { test: /\.(js)$/, use: 'babel-loader'}
	]
    },
    plugins: [new HtmlWebpackPlugin({
	template: 'src/index.html'
    })]
}
