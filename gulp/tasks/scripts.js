import webpack from 'webpack';
import webpackConfigMin from './../../webpack.config.min.js';

// Scripts
export const scripts = function (done, errorMain) {
	webpack(webpackConfigMin, onComplete);

	function onComplete (error, stats) {
		if (error) {
			onError(error);
		} else if (stats.hasErrors()) {
			onError(stats.toString());
		} else {
			onSuccess(stats.toString());
		}
	}

	function onError (error) {
		console.log(error);
		errorMain.apply(this, arguments);
		done();
	}

	function onSuccess () {
		done();
	}
};

export default scripts;
