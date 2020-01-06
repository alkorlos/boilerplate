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
// Заменяет ссылки на svg спрайт в svg-sprite-loader.js на svg спрайт с хэшом в имени
const svgManifest = require('./gulp/tasks/svg-manifest');
// Заменяет ссылку на sprite.svg в svg-sprite-loader.js на спрайт с хэшом в имени, грузит svg-sprite-loader в build
const svgSpriteLoader = require('./gulp/tasks/svg-sprite-loader');
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
		svgSpriteLoader,
		svgManifest,
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
		svgSpriteLoader,
		svgManifest,
		fonts,
		files
	)
);
