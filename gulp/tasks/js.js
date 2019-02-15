const webpack  = require('webpack');
const webpackConfig  = require('./../../webpack.config.js');

// JS
const js = function(done, errorMain) {
	webpack(webpackConfig, onComplete);
	function onComplete(error, stats) {
		if (error) {
			onError(error);
		} else if (stats.hasErrors()) {
			onError(stats.toString());
		} else {
			onSuccess(stats.toString());
		}
	}
	function onError(error) {
		console.log(error);
		errorMain.apply(this, arguments)
		done();
	}
	function onSuccess(detailInfo) {
		done();
	}
}

module.exports = js;
