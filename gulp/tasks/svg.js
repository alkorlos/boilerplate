import gulp from 'gulp';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin, { svgo } from 'gulp-imagemin';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';

import config from '../../paths.config.js';

// SVG
export const svg = function () {
	return gulp.src(config.src.svg)
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(imagemin([
			svgo({
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

export default svg;
