const gulp = require('gulp');

const changed = require('gulp-changed');

const config = require('../config');

// PHP
const php = function () {
	return gulp.src(config.src.php)
		.pipe(changed(config.build.php, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.build.php));
};

module.exports = php;
