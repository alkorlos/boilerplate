import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import config from './gulp/config.js';

export const webpackConfigMin = {
	mode: 'production',
	entry: {
		main: resolve(__dirname, config.src.scriptsEntry),
	},
	output: {
		path: resolve(__dirname, config.dist.js),
		filename: '[name].min.js'
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

if (process.env.SCRIPTS_SOURCEMAPS === 'true') {
	webpackConfigMin.devtool = 'source-map';
};

export default webpackConfigMin;
