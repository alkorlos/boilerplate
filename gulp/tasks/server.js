const browserSync = require('browser-sync');

const config = require('../config');

// Server
const server = function(done) {
	browserSync.init({
		server: {
			baseDir: './build'
		},
		port: 8080,
		open: true,
		files: [ // files to watch, livereload
			{
				match: [
					config.build.html + '/**/*.html',
					config.build.css + '/**/*.css',
					config.build.js + '/**/*.js',
					config.build.images + '/**/*.{webp,jpg,jpeg,png,svg}',
					config.build.svg + '/**/*.svg',
					config.build.fonts + '/**/*.{ttf,otf,woff,woff2}',
					config.build.files + '/**/*'
				],
				fn: function (event, file) {
					if ((event == 'change') || (event == 'add')) {
						console.log('[Browsersync] File event [' + event + ']: ' + file);
					}
					this.reload();
				}
			}
		]
	});
}

module.exports = server;
