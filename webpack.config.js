const config = require('./gulp/config');

const webpackConfig = {
	mode: 'development',
	entry: config.src.scriptsEntry,
	output: {
		path: __dirname + '/' + config.build.js,
		filename: '[name].js'
	},
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
