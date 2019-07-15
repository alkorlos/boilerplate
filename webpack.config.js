const config = require('./gulp/config');

const webpackConfig = {
	mode: 'production',
	entry: config.src.jsEntry,
	output: {
		path: __dirname + '/' + config.build.js,
		filename: '[name].js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};

module.exports = webpackConfig;
