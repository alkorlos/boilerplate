import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import config from './gulp/config.js';

export const webpackConfig = {
	mode: 'development',
	infrastructureLogging: {
		level: 'none'
	},
	entry: {
		main: resolve(__dirname, config.src.scriptsEntry),
	},
	output: {
		path: resolve(__dirname, config.dist.js),
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
