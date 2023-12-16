import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { nunjucksCompile } from 'gulp-nunjucks';
import nunjucks from 'nunjucks';
import prettyHtml from 'gulp-pretty-html';

import config from '../paths.config.js';

// Templates
export const templates = function () {
	return gulp.src([config.src.templatesPages, config.src.templatesException])
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(
			nunjucksCompile(
				{},
				{
					env: new nunjucks.Environment(new nunjucks.FileSystemLoader(config.src.templates))
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
