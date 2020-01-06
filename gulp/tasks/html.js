const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pugCompile = require('gulp-pug');

const config = require('../config');

// HTML
const html = function(done) {
	return gulp.src([config.src.html, config.src.htmlException])
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(
			pugCompile({
				pretty: true
			})
		)
		.pipe(gulp.dest(config.build.html))
		.on('end', done);
}

module.exports = html;
