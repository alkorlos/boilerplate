const gulp = require('gulp');

const config = require('../config');

// Favicon
const favicon = function(done) {
	return gulp.src(config.src.favicon)
		.pipe(gulp.dest(config.build.favicon))
		.on('end', done);
}

module.exports = favicon;
