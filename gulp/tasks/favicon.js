const gulp = require('gulp');

const config = require('../config');

// Favicon
const favicon = function () {
	return gulp.src(config.src.favicon)
		.pipe(gulp.dest(config.dist.favicon));
};

module.exports = favicon;
