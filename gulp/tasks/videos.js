const gulp = require('gulp');

const config = require('../config');

// Videos
const videos = function() {
	return gulp.src(config.src.videos)
		.pipe(gulp.dest(config.build.videos));
}

module.exports = videos;
