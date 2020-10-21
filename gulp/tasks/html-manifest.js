const gulp = require('gulp');
const revCollector = require('gulp-rev-collector');

const fs = require('fs');

const config = require('../config');

// HTML manifest
const htmlManifest = function (done) {
	if ((fs.existsSync(config.dist.manifest)) && (fs.existsSync(config.dist.htmlEntry))) {
		return gulp.src([config.dist.manifest, config.dist.htmlEntry])
			.pipe(revCollector({
				replaceReved: true
			}))
			.pipe(gulp.dest(config.dist.html));
	} else {
		console.log('HTML manifest error, file not exist.');
		done();
	}
};

module.exports = htmlManifest;
