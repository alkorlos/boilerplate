const webpackConfig = {
	mode: 'development',
	entry: {
		main: './src/scripts/main.js',
	},
	output: {
		path: __dirname + '/' + 'dist/js',
		filename: '[name].js'
	},
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

module.exports = webpackConfig;
