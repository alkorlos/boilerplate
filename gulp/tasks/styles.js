import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import csso from 'gulp-csso';
import rename from 'gulp-rename';

import gulpif from 'gulp-if';

import config from '../config.js';

import { useStylesOriginal, useStylesSourceMaps } from '../env.config.js';

// Styles
export const styles = function () {
	return gulp.src(config.src.stylesEntry)
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(sourcemaps.init())
		.pipe(postcss())
		.pipe(rename({
			extname: '.css'
		}))
		.pipe(gulpif(useStylesOriginal,
			gulp.dest(config.dist.css)
		))
		.pipe(csso(
			{
				restructure: false,
				sourceMap: true,
				debug: false
			}
		))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulpif(useStylesSourceMaps,
			sourcemaps.write('.')
		))
		.pipe(gulp.dest(config.dist.css));
};

export default styles;
