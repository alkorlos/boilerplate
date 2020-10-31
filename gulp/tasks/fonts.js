import gulp from 'gulp';

import changed from 'gulp-changed';

import config from '../config.js';

// Fonts
export const fonts = function () {
	return gulp.src(config.src.fonts)
		.pipe(changed(config.dist.fonts, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulp.dest(config.dist.fonts));
};

export default fonts;
