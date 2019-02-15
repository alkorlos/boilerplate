const gulp = require('gulp');
const collect = require('gulp-rev-collector');

const fs = require('fs');

const config = require('../config');

// SVG sprite loader
const svgSpriteLoader = function(done) {
	if ((fs.existsSync(config.build.manifest)) && (fs.existsSync(config.src.jsSvgSpriteLoader))) {
		return gulp.src([config.build.manifest, config.src.jsSvgSpriteLoader])
			.pipe(collect({
				replaceReved: true
			}))
			.pipe(gulp.dest(config.build.js))
			.on('end', done);
	} else {
		console.log('SVG sprite loader error, file not exist.');
		done();
		return false;
	}
}

module.exports = svgSpriteLoader;
