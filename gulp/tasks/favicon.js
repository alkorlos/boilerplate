import gulp from 'gulp';

import config from '../paths.config.js';

// Favicon
export const favicon = function () {
	return gulp.src(config.src.favicon)
		.pipe(gulp.dest(config.dist.favicon));
};

export default favicon;
