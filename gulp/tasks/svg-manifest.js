const gulp = require('gulp');

const replace = require('gulp-replace-string');

const fs = require('fs');

const config = require('../config');

// SVG manifest
const svgManifest = function(done) {
	const manifestData = require('../../build/rev/rev-manifest.json');
	const svgName = manifestData['svg/sprite.svg'];
	if (fs.existsSync(config.build.manifest) && fs.existsSync(config.build.svgSpriteLoader)) {
		return gulp.src(config.build.svgSpriteLoader)
			.pipe(replace('svg/sprite.svg', svgName))
			.pipe(gulp.dest(config.build.js))
			.on('end', done);
	} else {
		console.log('SVG manifest error, file not exist.');
		done();
		return false;
	}
}

module.exports = svgManifest;
