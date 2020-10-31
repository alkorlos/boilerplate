import gulp from 'gulp';

import { config } from '../config.js';

// Favicon
export const favicon = function () {
	return gulp.src(config.src.favicon)
		.pipe(gulp.dest(config.dist.favicon));
};
