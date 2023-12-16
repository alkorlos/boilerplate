import gulp from 'gulp';

import templates from './templates.js';
import styles from './styles.js';
import php from './php.js';
import images from './images.js';
import favicon from './favicon.js';
import svg from './svg.js';
import videos from './videos.js';
import fonts from './fonts.js';
import files from './files.js';

import config from '../../paths.config.js';

// Watch
export const watch = function () {
	gulp.watch(config.src.templates, gulp.series(templates));
	gulp.watch(config.src.styles, gulp.series(styles));
	gulp.watch(config.src.php, gulp.series(php));
	gulp.watch(config.src.images, gulp.series(images));
	gulp.watch(config.src.favicon, gulp.series(favicon));
	gulp.watch(config.src.svg, gulp.series(svg));
	gulp.watch(config.src.videos, gulp.series(videos));
	gulp.watch(config.src.fonts, gulp.series(fonts));
	gulp.watch(config.src.files, gulp.series(files));
};

export default watch;
