import gulp from 'gulp';

import changed from 'gulp-changed';
import { compareContents } from 'gulp-changed';

import config from '../config.js';

// Videos
export const videos = function () {
	return gulp.src(config.src.videos)
		.pipe(changed(config.dist.videos, {
			hasChanged: compareContents
		}))
		.pipe(gulp.dest(config.dist.videos));
};

export default videos;
