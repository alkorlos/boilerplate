const gulp = require('gulp');

const config = require('../config');

// Images
const images = function () {
	return gulp.src(config.src.images)
		.pipe(gulp.dest(config.build.images));
};

module.exports = images;
