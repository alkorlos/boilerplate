const gulp = require('gulp');

const changed = require('gulp-changed');

const config = require('../config');

// Images
const images = function () {
	return gulp.src(config.src.images)
		.pipe(changed(config.build.images, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.build.images));
};

module.exports = images;
