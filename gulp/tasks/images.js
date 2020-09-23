const gulp = require('gulp');

const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
// const imageminwebp = require('imagemin-webp');

const gulpif = require('gulp-if');
const mode = process.env.NODE_ENV;

const config = require('../config');

// Images
const images = function () {
	return gulp.src(config.src.images)
		.pipe(changed(config.build.images, {
			hasChanged: changed.compareContents
		}))
		.pipe(gulpif(mode === 'production',
			imagemin([
				// imageminwebp({
				// 	quality: 80
				// }),
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
			])
		))
		.pipe(gulp.dest(config.build.images));
};

module.exports = images;
