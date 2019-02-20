const gulp = require('gulp');

const plumber = require('gulp-plumber');
const pugCompile = require('gulp-pug');

const config = require('../config');

// PUG
const pug = function(done) {
	return gulp.src([config.src.pug, config.src.pugException])
		.pipe(plumber())
		.pipe(
			pugCompile({
				pretty: true
			})
		)
		.pipe(gulp.dest(config.build.html))
		.on('end', done);
}

module.exports = pug;