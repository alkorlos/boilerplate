import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';

import { config } from '../config.js';

// SVG
export const svg = function () {
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
