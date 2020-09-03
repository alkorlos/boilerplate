const gulp = require('gulp');
const revCollector = require('gulp-rev-collector');

const fs = require('fs');

const config = require('../config');

// HTML manifest
const htmlManifest = function (done) {
	if ((fs.existsSync(config.build.manifest)) && (fs.existsSync(config.build.htmlEntry))) {
		return gulp.src([config.build.manifest, config.build.htmlEntry])
			.pipe(revCollector({
				replaceReved: true
			}))
			.pipe(gulp.dest(config.build.html));
	} else {
		console.log('HTML manifest error, file not exist.');
		done();
	}
};

module.exports = htmlManifest;
