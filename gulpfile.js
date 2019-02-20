const gulp = require('gulp');

const watch = require('./gulp/tasks/watch');
const server = require('./gulp/tasks/server');

const clean = require('./gulp/tasks/clean');
const pug = require('./gulp/tasks/pug');
const css = require('./gulp/tasks/css');
// Добавляет хэш к именам css файлов и sprite.svg, генерит rev-manifest.json
const revision = require('./gulp/tasks/revision');
// Заменяет ссылки на стили в html шаблоне на файлы стилей с хэшом в имени
const htmlManifest = require('./gulp/tasks/html-manifest');
// Заменяет ссылку на sprite.svg в svg-sprite-loader.js на спрайт с хэшом в имени, грузит svg-sprite-loader в build
const svgSpriteLoader = require('./gulp/tasks/svg-sprite-loader');
const js = require('./gulp/tasks/js');
const images = require('./gulp/tasks/images');
const svg = require('./gulp/tasks/svg');
const fonts = require('./gulp/tasks/fonts');
const files = require('./gulp/tasks/files');

gulp.task('start',
	gulp.series(
		clean,
		pug,
		css,
		js,
		images,
		svg,
		svgSpriteLoader,
		fonts,
		files,
		watch,
		server
	)
);

gulp.task('build',
	gulp.series(
		clean,
		pug,
		css,
		js,
		images,
		svg,
		revision,
		htmlManifest,
		svgSpriteLoader,
		fonts,
		files
	)
);
