const gulp = require('gulp');

const plumber = require('gulp-plumber');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore'); // Для добавления тэга symbol с id соответствующим имени иконки
const rename = require('gulp-rename');

const config = require('../config');

// SVG
const svg = function(done) {
	return gulp.src(config.src.svg)
		.pipe(plumber())
		.pipe(svgmin({
			plugins: [{
				removeViewBox: false
			}]
		}))
		.pipe(
			svgstore({
				inlineSvg: true
			})
		)
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest(config.build.svg))
		.on('end', done);
}

module.exports = svg;
