const gulp = require('gulp');

const changed = require('gulp-changed');

const config = require('../config');

// Files
const files = function () {
	return gulp.src(config.src.files)
		.pipe(changed(config.dist.files, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.dist.files));
};

module.exports = files;
