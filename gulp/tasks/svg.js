const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

const config = require('../config');

// SVG
const svg = function () {
	return gulp.src(config.src.svg)
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(imagemin([
			imagemin.svgo({
				plugins: [
					{
						cleanupIDs: {
							minify: false
						}
					},
					{
						removeViewBox: false
					}
				]
			})
		]))
		.pipe(
			svgstore({
				inlineSvg: true
			})
		)
		.pipe(rename('sprite.svg'))
		.pipe(gulp.dest(config.dist.svg));
};

module.exports = svg;
