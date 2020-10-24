const browserSync = require('browser-sync');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');

const config = require('../config');
const webpackConfig = require('./../../webpack.config.js');
const webpackConfigMin = require('./../../webpack.config.min.js');
const compiler = webpack(webpackConfig);
const compilerMin = webpack(webpackConfigMin);

compiler.hooks.afterDone.tap('done', function () {
	browserSync.reload();
});

// Server
const server = function () {
	browserSync.init({
		server: {
			baseDir: './dist',
			middleware: [
				middleware(
					compiler,
					{
						publicPath: '/scripts',
						writeToDisk: true,
						logLevel: 'silent'
					}
				),
				middleware(
					compilerMin,
					{
						publicPath: '/scripts',
						writeToDisk: true
					}
				)
			]
		},
		port: 8080,
		open: false,
		files: [
			{
				match: [
					config.dist.html + '/**/*.html',
					config.dist.css + '/**/*.min.css',
					config.dist.php + '/**/*.php',
					config.dist.images + '/**/*.{webp,jpg,jpeg,png,svg}',
					config.dist.svg + '/**/*.svg',
					config.dist.videos + '/**/*.{webm,mp4}',
					config.dist.fonts + '/**/*.{ttf,otf,woff,woff2}',
					config.dist.files + '/**/*'
				],
				fn: function (event, file) {
					if ((event === 'change') || (event === 'add')) {
						console.log('[Browsersync] File event [' + event + ']: ' + file);
					}
					this.reload();
				}
			}
		]
	});
};

module.exports = server;
