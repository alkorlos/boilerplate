import gulp from 'gulp';

import changed from 'gulp-changed';
import { compareContents } from 'gulp-changed';

import config from '../../paths.config.js';

// Fonts
export const fonts = function () {
	return gulp.src(config.src.fonts)
		.pipe(changed(config.dist.fonts, {
			hasChanged: compareContents
		}))
		.pipe(gulp.dest(config.dist.fonts));
};

export default fonts;
