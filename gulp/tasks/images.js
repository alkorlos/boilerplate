const gulp = require('gulp');

const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

const config = require('../config');

// Images
const images = function () {
	return gulp.src(config.src.images)
		.pipe(changed(config.build.images))
		.pipe(imagemin([
			imagemin.mozjpeg({
				quality: 80
			}),
			imagemin.optipng({
				optimizationLevel: 3
			}),
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
		.pipe(gulp.dest(config.build.images));
};

module.exports = images;
