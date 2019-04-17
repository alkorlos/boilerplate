const gulp = require('gulp');

const pug = require('./pug');
const css = require('./css');
const js = require('./js');
const images = require('./images');
const videos = require('./videos');
const svg = require('./svg');
const fonts = require('./fonts');
const files = require('./files');

const wrapPipe = require('../wrapPipe');

const config = require('../config');

// Watch
const watch = function(done) {
	gulp.watch(config.src.pug, gulp.series(pug));
	gulp.watch(config.src.css, gulp.series(wrapPipe(css)));
	gulp.watch(config.src.js, gulp.series(js));
	gulp.watch(config.src.images, gulp.series(images));
	gulp.watch(config.src.videos, gulp.series(videos));
	gulp.watch(config.src.svg, gulp.series(svg));
	gulp.watch(config.src.fonts, gulp.series(fonts));
	gulp.watch(config.src.files, gulp.series(files));
	done();
}

module.exports = watch;
