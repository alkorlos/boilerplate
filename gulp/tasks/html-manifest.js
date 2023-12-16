import gulp from 'gulp';
import revCollector from 'gulp-rev-collector';

import fs from 'fs';

import config from '../paths.config.js';

// HTML manifest
export const htmlManifest = function (done) {
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

export default htmlManifest;
