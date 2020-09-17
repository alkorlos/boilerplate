const gulp = require('gulp');

const changed = require('gulp-changed');

const config = require('../config');

// Files
const files = function () {
	return gulp.src(config.src.files)
		.pipe(changed(config.build.files, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.build.files));
};

module.exports = files;
