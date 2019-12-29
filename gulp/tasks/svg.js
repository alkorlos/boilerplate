const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore'); // Для добавления тэга symbol с id соответствующим имени иконки
const rename = require('gulp-rename');

const config = require('../config');

// SVG
const svg = function(done) {
	return gulp.src(config.src.svg)
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(svgmin({
			plugins: [
				{
					cleanupIDs: {
						minify: false // Лишние id очищаются и минифицируются с помощью SVGOMG, но если id были изменены вручную их трогать не нужно
					}
				},
				{
					removeViewBox: false
				}
			]
		}))
		.pipe(
			svgstore({
				inlineSvg: true
			})
		)
		.pipe(rename('sprite.svg'))
		.pipe(gulp.dest(config.build.svg))
		.on('end', done);
}

module.exports = svg;
