const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const nunjucks = require('gulp-nunjucks');
const prettyHtml = require('gulp-pretty-html');

const config = require('../config');

// HTML
const html = function(done) {
	return gulp.src([config.src.html, config.src.htmlException])
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(
			nunjucks.compile()
		)
		.pipe(prettyHtml(
			{
				indent_size: 4,
				indent_char: '	',
				max_preserve_newlines: 1
			}
		))
		.pipe(gulp.dest(config.build.html))
		.on('end', done);
}

module.exports = html;
