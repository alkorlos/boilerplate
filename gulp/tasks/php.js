import gulp from 'gulp';

import changed from 'gulp-changed';
import { compareContents } from 'gulp-changed';

import config from '../config.js';

// PHP
export const php = function () {
	return gulp.src(config.src.php)
		.pipe(changed(config.dist.php, {
			hasChanged: compareContents
		}))
		.pipe(gulp.dest(config.dist.php));
};

export default php;
