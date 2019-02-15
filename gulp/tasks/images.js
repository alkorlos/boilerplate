const gulp = require('gulp');

const config = require('../config');

// Images
const images = function(done) {
	return gulp.src(config.src.images)
		.pipe(gulp.dest(config.build.images))
		.on('end', done);
}

module.exports = images;
