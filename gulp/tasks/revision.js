const gulp = require('gulp');
const rev = require('gulp-rev');

const fs = require('fs');

const config = require('../config');

// Revision
const revision = function(done) {
	if ((fs.existsSync(config.build.cssEntry)) && (fs.existsSync(config.build.cssEntryMin)) &&
		(fs.existsSync(config.build.jsEntry)) &&
		(fs.existsSync(config.build.svgSprite))) {
		return gulp.src([config.build.cssEntry, config.build.cssEntryMin,
						config.build.jsEntry,
						config.build.svgSprite], {base: 'build'})
			.pipe(rev())
			.pipe(gulp.dest(config.build.html))
			.pipe(rev.manifest())
			.pipe(gulp.dest(config.build.rev))
			.on('end', done);
	} else {
		console.log('Revision error, file not exist.');
		done();
		return false;
	}
}

module.exports = revision;
