const gulp = require('gulp');

const changed = require('gulp-changed');

const config = require('../config');

// PHP
const php = function () {
	return gulp.src(config.src.php)
		.pipe(changed(config.dist.php, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.dist.php));
};

module.exports = php;
