const webpack = require('webpack');
const webpackConfigMin = require('./../../webpack.config.min.js');

// Scripts
const scripts = function (done, errorMain) {
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

module.exports = scripts;
