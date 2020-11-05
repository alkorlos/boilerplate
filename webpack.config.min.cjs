const webpackConfigMin = {
	mode: 'production',
	entry: {
		main: './src/scripts/main.js',
	},
	output: {
		path: __dirname + '/' + 'dist/js',
		filename: '[name].js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				}
			}
		]
	}
};

module.exports = webpackConfigMin;
