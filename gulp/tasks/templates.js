import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import nunjucks from 'gulp-nunjucks';
import nunjucksBase from 'nunjucks';
import prettyHtml from 'gulp-pretty-html';

import config from '../config.js';

// Templates
export const templates = function () {
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

export default templates;
