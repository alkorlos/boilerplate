const gulp = require('gulp');

const pug = require('./pug');
const css = require('./css');
const revision = require('./revision'); // Добавляет хэш к именам css файлов и sprite.svg, генерит rev-manifest.json
const htmlManifest = require('./html-manifest'); // Заменяет ссылки на стили в html шаблоне на файлы стилей с хэшом в имени
const svgSpriteLoader = require('./svg-sprite-loader'); // Заменяет ссылку на sprite.svg в svg-sprite-loader.js на спрайт с хэшом в имени
const revisionClean = require('./revision-clean'); // Удаляет старые стили и svg спрайты с хэшом в имени
const js = require('./js');
const images = require('./images');
const svg = require('./svg');
const fonts = require('./fonts');
const files = require('./files');

const wrapPipe = require('../wrapPipe');

const config = require('../config');

// Watch
const watch = function(done) {
	gulp.watch(config.src.pug, gulp.series(pug, htmlManifest));
	gulp.watch(config.src.css, gulp.series(wrapPipe(css), revision, htmlManifest, revisionClean));
	gulp.watch(config.src.js, gulp.series(js));
	gulp.watch(config.src.images, gulp.series(images));
	gulp.watch(config.src.svg, gulp.series(svg, revision, svgSpriteLoader, revisionClean));
	gulp.watch(config.src.fonts, gulp.series(fonts));
	gulp.watch(config.src.files, gulp.series(files));
	done();
}

module.exports = watch;
