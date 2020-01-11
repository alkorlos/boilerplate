const gulp = require('gulp');

const watch = require('./gulp/tasks/watch');
const server = require('./gulp/tasks/server');

const clean = require('./gulp/tasks/clean');
const html = require('./gulp/tasks/html');
const css = require('./gulp/tasks/css');
// Добавляет хэш к именам css файлов и sprite.svg, генерит rev-manifest.json
const revision = require('./gulp/tasks/revision');
// Заменяет ссылки на стили в html шаблоне на файлы стилей с хэшом в имени
const htmlManifest = require('./gulp/tasks/html-manifest');
const js = require('./gulp/tasks/js');
const images = require('./gulp/tasks/images');
const videos = require('./gulp/tasks/videos');
const svg = require('./gulp/tasks/svg');
const fonts = require('./gulp/tasks/fonts');
const files = require('./gulp/tasks/files');

gulp.task('start',
	gulp.series(
		clean,
		html,
		css,
		images,
		videos,
		svg,
		revision,
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
		css,
		js,
		images,
		videos,
		svg,
		revision,
		htmlManifest,
		fonts,
		files
	)
);
