const gulp = require('gulp');

const templates = require('./templates');
const styles = require('./styles');
const php = require('./php');
const images = require('./images');
const favicon = require('./favicon');
const svg = require('./svg');
const videos = require('./videos');
const fonts = require('./fonts');
const files = require('./files');

const config = require('../config');

// Watch
const watch = function () {
	gulp.watch(config.src.templates, gulp.series(templates));
	gulp.watch(config.src.styles, gulp.series(styles));
	gulp.watch(config.src.php, gulp.series(php));
	gulp.watch(config.src.images, gulp.series(images));
	gulp.watch(config.src.favicon, gulp.series(favicon));
	gulp.watch(config.src.svg, gulp.series(svg));
	gulp.watch(config.src.videos, gulp.series(videos));
	gulp.watch(config.src.fonts, gulp.series(fonts));
	gulp.watch(config.src.files, gulp.series(files));
};

module.exports = watch;
