const config = {
	src: {
		templates: 'src/templates/**/*.njk',
		templatesException: '!src/templates/**/_*.njk',
		styles: 'src/styles/**/*.pcss',
		stylesEntry: 'src/styles/style.pcss',
		scripts: 'src/scripts/**/*.js',
		scriptsEntry: './src/scripts/main.js',
		php: 'src/php/**/*.php',
		images: 'src/images/**/*.{webp,jpg,jpeg,png,svg,ico}',
		favicon: 'src/favicon.ico',
		svg: 'src/svg/**/*.svg',
		videos: 'src/videos/**/*.{webm,mp4}',
		fonts: 'src/fonts/**/*.{ttf,otf,woff,woff2}',
		files: 'src/files/**/*'
	},
	build: {
		root: 'build',
		rootEntry: '!build',
		html: 'build',
		htmlEntry: 'build/index.html',
		css: 'build/css',
		cssEntry: 'build/css/style.css',
		cssEntryMin: 'build/css/style.min.css',
		js: 'build/js',
		jsEntry: 'build/js/main.js',
		jsEntryMin: 'build/js/main.min.js',
		php: 'build/php',
		images: 'build/images',
		favicon: 'build',
		svg: 'build/svg',
		svgSprite: 'build/svg/sprite.svg',
		videos: 'build/videos',
		fonts: 'build/fonts',
		files: 'build/files',
		rev: 'build/rev',
		manifest: 'build/rev/rev-manifest.json'
	}
};

module.exports = config;
