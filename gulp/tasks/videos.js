const gulp = require('gulp');

const changed = require('gulp-changed');

const config = require('../config');

// Videos
const videos = function () {
	return gulp.src(config.src.videos)
		.pipe(changed(config.dist.videos, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.dist.videos));
};

module.exports = videos;
