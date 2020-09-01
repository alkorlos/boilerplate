const gulp = require('gulp');
const rev = require('gulp-rev');

const fs = require('fs');

const config = require('../config');

// Revision
const revision = function() {
	let filenames = [];

	if (fs.existsSync(config.build.cssEntryMin)) {
		filenames.push(config.build.cssEntryMin);
	} else {
		console.log('Revision warning, file style.min.css not exist.');
	}

	if (fs.existsSync(config.build.jsEntryMin)) {
		filenames.push(config.build.jsEntryMin);
	} else {
		console.log('Revision warning, file main.min.js not exist.');
	}

	if (fs.existsSync(config.build.svgSprite)) {
		filenames.push(config.build.svgSprite);
	} else {
		console.log('Revision warning, file sprite.svg not exist.');
	}

	return gulp.src(filenames, {base: 'build'})
		.pipe(rev())
		.pipe(gulp.dest(config.build.html))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.build.rev));
}

module.exports = revision;
