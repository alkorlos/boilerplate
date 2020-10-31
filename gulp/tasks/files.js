import gulp from 'gulp';

import changed from 'gulp-changed';

import config from '../config.js';

// Files
export const files = function () {
	return gulp.src(config.src.files)
		.pipe(changed(config.dist.files, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.dist.files));
};

export default files;
