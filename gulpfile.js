const gulp = require('gulp');

const watch = require('./gulp/tasks/watch');
const server = require('./gulp/tasks/server');

const clean = require('./gulp/tasks/clean');

const templates = require('./gulp/tasks/templates');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const php = require('./gulp/tasks/php');
const images = require('./gulp/tasks/images');
const favicon = require('./gulp/tasks/favicon');
const svg = require('./gulp/tasks/svg');
const videos = require('./gulp/tasks/videos');
const fonts = require('./gulp/tasks/fonts');
const files = require('./gulp/tasks/files');

const revision = require('./gulp/tasks/revision');
const htmlManifest = require('./gulp/tasks/html-manifest');

const start = gulp.series(
	gulp.parallel(
		templates,
		styles,
		php,
		images,
		favicon,
		svg,
		videos,
		fonts,
		files
	),
	gulp.parallel(
		watch,
		server
	)
);

exports.start = start;

const build = gulp.series(
	clean,
	gulp.parallel(
		templates,
		styles,
		scripts,
		php,
		images,
		favicon,
		svg,
		videos,
		fonts,
		files
	),
	revision,
	htmlManifest
);

exports.build = build;
