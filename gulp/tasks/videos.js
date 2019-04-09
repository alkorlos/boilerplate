const gulp = require('gulp');

const config = require('../config');

// Videos
const videos = function(done) {
	return gulp.src(config.src.videos)
		.pipe(gulp.dest(config.build.videos))
		.on('end', done);
}

module.exports = videos;
