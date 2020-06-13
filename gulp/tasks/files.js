const gulp = require('gulp');

const config = require('../config');

// Files
const files = function() {
	return gulp.src(config.src.files)
		.pipe(gulp.dest(config.build.files));
}

module.exports = files;
