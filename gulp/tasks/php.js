import gulp from 'gulp';

import changed from 'gulp-changed';

import config from '../config.js';

// PHP
export const php = function () {
	return gulp.src(config.src.php)
		.pipe(changed(config.dist.php, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.dist.php));
};

export default php;
