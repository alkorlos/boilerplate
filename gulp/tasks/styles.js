import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import csso from 'gulp-csso';
import rename from 'gulp-rename';

import postcssImportExtGlob from 'postcss-import-ext-glob';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';

import { config } from '../config.js';

// Styles
export const styles = function () {
	return gulp.src(config.src.stylesEntry)
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(sourcemaps.init())
		.pipe(postcss([
			postcssImportExtGlob,
			postcssImport,
			postcssPresetEnv({
				stage: 1,
				autoprefixer: true
			})
		]))
		.pipe(rename({
			extname: '.css'
		}))
		.pipe(gulp.dest(config.dist.css))
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
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.dist.css));
};
