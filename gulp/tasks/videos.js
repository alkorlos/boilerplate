const gulp = require('gulp');

const changed = require('gulp-changed');

const config = require('../config');

// Videos
const videos = function () {
	return gulp.src(config.src.videos)
		.pipe(changed(config.build.videos, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.build.videos));
};

module.exports = videos;
