import gulp from 'gulp';
import rev from 'gulp-rev';

import fs from 'fs';

import config from '../paths.config.js';

// Revision
export const revision = function () {
	const filenames = [];

	if (fs.existsSync(config.dist.cssEntryMin)) {
		filenames.push(config.dist.cssEntryMin);
	} else {
		console.log('Revision warning, file style.min.css not exist.');
	}

	if (fs.existsSync(config.dist.jsEntryMin)) {
		filenames.push(config.dist.jsEntryMin);
	} else {
		console.log('Revision warning, file main.min.js not exist.');
	}

	if (fs.existsSync(config.dist.svgSprite)) {
		filenames.push(config.dist.svgSprite);
	} else {
		console.log('Revision warning, file sprite.svg not exist.');
	}

	return gulp.src(filenames, { base: 'dist' })
		.pipe(rev())
		.pipe(gulp.dest(config.dist.html))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.dist.rev));
};

export default revision;
