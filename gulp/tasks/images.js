import gulp from 'gulp';

import changed from 'gulp-changed';
import { compareContents } from 'gulp-changed';

import config from '../config.js';

// Images
export const images = function () {
	return gulp.src(config.src.images)
		.pipe(changed(config.dist.images, {
			hasChanged: compareContents
		}))
		.pipe(gulp.dest(config.dist.images));
};

export default images;
