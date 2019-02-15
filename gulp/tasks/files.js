const gulp = require('gulp');

const config = require('../config');

// Files
const files = function(done) {
	return gulp.src(config.src.files)
		.pipe(gulp.dest(config.build.files))
		.on('end', done);
}

module.exports = files;
