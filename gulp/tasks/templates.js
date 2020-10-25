const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const nunjucks = require('gulp-nunjucks');
const nunjucksBase = require('nunjucks');
const prettyHtml = require('gulp-pretty-html');

const config = require('../config');

// Templates
const templates = function () {
	return gulp.src([config.src.templatesPages, config.src.templatesException])
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(
			nunjucks.compile(
				{},
				{
					env: new nunjucksBase.Environment(new nunjucksBase.FileSystemLoader(config.src.templates))
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
