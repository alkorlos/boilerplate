const gulp = require('gulp');
const collect = require('gulp-rev-collector');

const fs = require('fs');

const config = require('../config');

// HTML manifest
const htmlManifest = function(done) {
	if ((fs.existsSync(config.build.manifest)) && (fs.existsSync(config.build.htmlEntry))) {
		return gulp.src([config.build.manifest, config.build.htmlEntry])
			.pipe(collect({
				replaceReved: true
			}))
			.pipe(gulp.dest(config.build.html))
			.on('end', done);
	} else {
		console.log('HTML manifest error, file not exist.');
		done();
		return false;
	}
}

module.exports = htmlManifest;
