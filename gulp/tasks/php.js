const gulp = require('gulp');

const config = require('../config');

// PHP
const php = function () {
	return gulp.src(config.src.php)
		.pipe(gulp.dest(config.build.php));
};

module.exports = php;
