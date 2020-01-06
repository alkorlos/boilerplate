const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const nunjucksRender = require('gulp-nunjucks-render');

const config = require('../config');

// HTML
const html = function(done) {
	return gulp.src([config.src.html, config.src.htmlException])
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(
			nunjucksRender({
				path: [config.src.htmlPath]
			})
		)
		.pipe(gulp.dest(config.build.html))
		.on('end', done);
}

module.exports = html;
