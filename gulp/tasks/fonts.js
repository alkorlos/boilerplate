const gulp = require('gulp');

const config = require('../config');

// Fonts
const fonts = function () {
	return gulp.src(config.src.fonts)
		.pipe(gulp.dest(config.build.fonts));
};

module.exports = fonts;
