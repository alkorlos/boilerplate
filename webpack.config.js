import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import config from './gulp/config.js';

export const webpackConfig = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, config.src.scriptsEntry),
	},
	output: {
		path: path.resolve(__dirname, config.dist.js),
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

export default webpackConfig;
