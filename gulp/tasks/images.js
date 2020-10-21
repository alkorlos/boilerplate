const gulp = require('gulp');

const changed = require('gulp-changed');

const config = require('../config');

// Images
const images = function () {
	return gulp.src(config.src.images)
		.pipe(changed(config.dist.images, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.dist.images));
};

module.exports = images;
