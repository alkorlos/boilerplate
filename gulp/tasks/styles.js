const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');
const rename = require('gulp-rename');

const config = require('../config');

// Styles
const styles = function () {
	return gulp.src(config.src.stylesEntry)
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(sourcemaps.init())
		.pipe(postcss())
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

module.exports = styles;
