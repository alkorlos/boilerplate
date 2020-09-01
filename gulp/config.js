const config = {
	src: {
		templates: 'src/templates/**/*.njk',
		templatesException: '!src/templates/**/_*.njk',
		styles: 'src/styles/**/*.postcss',
		stylesEntry: 'src/styles/style.postcss',
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
		css: 'build/styles',
		cssEntry: 'build/styles/style.css',
		cssEntryMin: 'build/styles/style.min.css',
		js: 'build/scripts',
		jsEntry: 'build/scripts/main.js',
		jsEntryMin: 'build/scripts/main.min.js',
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
