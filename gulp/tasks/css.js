const gulp = require('gulp');

const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');
const rename = require('gulp-rename');

const config = require('../config');

// CSS
const css = function(done, errorMain) {
	return gulp.src(config.src.cssEntry)
		// .pipe(plumber())
		// .pipe(plumber(function(error) {
		// 	console.log('\x1b[31m%s\x1b[0m', 'Error:');
		// 	console.log(error.file + ':' + error.line + ':' + error.column + ': ' + error.reason);
		// 	return errorMain.apply(this, arguments);
		// }))
		.pipe(sourcemaps.init())
		.pipe(postcss())
		.pipe(gulp.dest(config.build.css))
		.pipe(csso({
			restructure: false, // отключил, при объединении селекторов стили могли ломаться
			sourceMap: true,
			debug: false
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.build.css))
		.on('end', done);
}

module.exports = css;