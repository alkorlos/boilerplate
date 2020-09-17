const browserSync = require('browser-sync');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');

const config = require('../config');
const webpackConfig = require('./../../webpack.config.js');
const webpackConfigMin = require('./../../webpack.config.min.js');
const compiler = webpack(webpackConfig);
const compilerMin = webpack(webpackConfigMin);

compiler.plugin('done', function () {
	browserSync.reload();
});

// Server
const server = function () {
	browserSync.init({
		server: {
			baseDir: './build',
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
					config.build.html + '/**/*.html',
					config.build.css + '/**/*.min.css',
					config.build.root + '/*.php',
					config.build.images + '/**/*.{webp,jpg,jpeg,png,svg}',
					config.build.svg + '/**/*.svg',
					config.build.videos + '/**/*.{webm,mp4}',
					config.build.fonts + '/**/*.{ttf,otf,woff,woff2}',
					config.build.files + '/**/*'
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
