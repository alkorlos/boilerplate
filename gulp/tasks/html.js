const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const nunjucks = require('gulp-nunjucks');
const rename = require('gulp-rename');
const prettyHtml = require('gulp-pretty-html');

const config = require('../config');

// HTML
const html = function() {
	return gulp.src([config.src.njk, config.src.njkException])
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(
			nunjucks.compile()
		)
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(prettyHtml(
			{
				indent_size: 4,
				indent_char: '	',
				max_preserve_newlines: 1
			}
		))
		.pipe(gulp.dest(config.build.html));
}

module.exports = html;
