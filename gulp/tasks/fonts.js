const gulp = require('gulp');

const config = require('../config');

// Fonts
const fonts = function(done) {
	return gulp.src(config.src.fonts)
		.pipe(gulp.dest(config.build.fonts))
		.on('end', done);
}

module.exports = fonts;
