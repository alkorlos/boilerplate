const config = {
	src: {
		njk: 'src/templates/**/*.njk',
		njkException: '!src/templates/**/_*.njk',
		styles: 'src/styles/**/*.css',
		stylesEntry: 'src/styles/style.css',
		scripts: 'src/scripts/**/*.js',
		scriptsEntry: './src/scripts/main.js',
		php: 'src/*.php',
		images: 'src/images/**/*.{webp,jpg,jpeg,png,svg,ico}',
		favicon: 'src/favicon.ico',
		videos: 'src/video/**/*.{webm,mp4}',
		svg: 'src/svg/**/*.svg',
		fonts: 'src/fonts/**/*.{ttf,otf,woff,woff2}',
		files: 'src/files/**/*',
	},
	build: {
		root: 'build',
		rootEntry: '!build',
		html : 'build',
		htmlEntry: 'build/index.html',
		styles: 'build/styles',
		stylesEntry: 'build/styles/style.css',
		stylesEntryMin: 'build/styles/style.min.css',
		scripts: 'build/scripts',
		scriptsEntry: 'build/scripts/main.js',
		scriptsEntryMin: 'build/scripts/main.min.js',
		php : 'build',
		images: 'build/images',
		favicon: 'build',
		videos: 'build/video',
		svg: 'build/svg',
		svgSprite: 'build/svg/sprite.svg',
		fonts: 'build/fonts',
		files: 'build/files',
		rev: 'build/rev',
		manifest: 'build/rev/rev-manifest.json'
	}
}

module.exports = config;
