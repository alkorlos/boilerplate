import gulp from 'gulp';

import { watch } from './gulp/tasks/watch.js';
import { server } from './gulp/tasks/server.js';

import { clean } from './gulp/tasks/clean.js';

import { templates } from './gulp/tasks/templates.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { php } from './gulp/tasks/php.js';
import { images } from './gulp/tasks/images.js';
import { favicon } from './gulp/tasks/favicon.js';
import { svg } from './gulp/tasks/svg.js';
import { videos } from './gulp/tasks/videos.js';
import { fonts } from './gulp/tasks/fonts.js';
import { files } from './gulp/tasks/files.js';

import { revision } from './gulp/tasks/revision.js';
import { htmlManifest } from './gulp/tasks/html-manifest.js';

export const start = gulp.series(
	gulp.parallel(
		templates,
		styles,
		php,
		images,
		favicon,
		svg,
		videos,
		fonts,
		files
	),
	gulp.parallel(
		watch,
		server
	)
);

export const build = gulp.series(
	clean,
	gulp.parallel(
		templates,
		styles,
		scripts,
		php,
		images,
		favicon,
		svg,
		videos,
		fonts,
		files
	),
	revision,
	htmlManifest
);
