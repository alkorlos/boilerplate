const gulp = require('gulp');

const config = require('../config');

// PHP
const php = function(done) {
	return gulp.src(config.src.php)
		.pipe(gulp.dest(config.build.php))
		.on('end', done);
}

module.exports = php;
