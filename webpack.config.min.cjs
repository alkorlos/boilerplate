const mode = process.env.NODE_ENV;

const webpackConfigMin = {
	mode: 'production',
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

if (mode === 'development' || mode === 'production') {
	webpackConfigMin.devtool = 'source-map';
};


module.exports = webpackConfigMin;
