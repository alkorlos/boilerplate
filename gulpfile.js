const gulp = require('gulp');

const watch = require('./gulp/tasks/watch');
const server = require('./gulp/tasks/server');

const clean = require('./gulp/tasks/clean');
const html = require('./gulp/tasks/html');
const styles = require('./gulp/tasks/styles');
const revision = require('./gulp/tasks/revision');
const htmlManifest = require('./gulp/tasks/html-manifest');
const scripts = require('./gulp/tasks/scripts');
const php = require('./gulp/tasks/php');
const images = require('./gulp/tasks/images');
const favicon = require('./gulp/tasks/favicon');
const videos = require('./gulp/tasks/videos');
const svg = require('./gulp/tasks/svg');
const fonts = require('./gulp/tasks/fonts');
const files = require('./gulp/tasks/files');

gulp.task('start',
	gulp.series(
		clean,
		html,
		styles,
		php,
		images,
		favicon,
		videos,
		svg,
		fonts,
		files,
		watch,
		server
	)
);

gulp.task('build',
	gulp.series(
		clean,
		html,
		styles,
		scripts,
		php,
		images,
		favicon,
		videos,
		svg,
		revision,
		htmlManifest,
		fonts,
		files
	)
);
