const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const nunjucks = require('gulp-nunjucks');
const nunjucks_lib = require('nunjucks');
const prettyHtml = require('gulp-pretty-html');

const config = require('../config');

// Templates
const templates = function () {
	return gulp.src([config.src.templates, config.src.templatesException])
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(
			nunjucks.compile(
				{},
				{
					env: new nunjucks_lib.Environment(new nunjucks_lib.FileSystemLoader(config.src.templatesBase))
				}
			)
		)
		.pipe(prettyHtml(
			{
				indent_size: 4,
				indent_char: '	',
				max_preserve_newlines: 1
			}
		))
		.pipe(gulp.dest(config.dist.html));
};

module.exports = templates;
