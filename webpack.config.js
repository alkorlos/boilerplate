import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
