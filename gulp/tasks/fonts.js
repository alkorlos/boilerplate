const gulp = require('gulp');

const changed = require('gulp-changed');

const config = require('../config');

// Fonts
const fonts = function () {
	return gulp.src(config.src.fonts)
		.pipe(changed(config.dist.fonts, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.dist.fonts));
};

module.exports = fonts;
