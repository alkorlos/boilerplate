const config = {
	src: {
		pug: 'src/templates/**/*.pug',
		pugException: '!src/templates/**/_*.pug',
		css: 'src/css/**/*.css',
		cssEntry: 'src/css/style.css',
		js: 'src/js/**/*.js',
		jsEntry: './src/js/main.js',
		jsSvgSpriteLoader: 'src/js/svg-sprite-loader.js',
		images: 'src/img/**/*.{webp,jpg,jpeg,png,svg,ico}',
		svg: 'src/svg/**/*.svg',
		fonts: 'src/fonts/**/*.{ttf,otf,woff,woff2}',
		files: 'src/files/**/*',
	},
	build: {
		root: 'build',
		rootException: '!build',
		html : 'build',
		htmlEntry: 'build/index.html',
		css: 'build/css',
		cssEntry: 'build/css/style.css',
		cssEntryMin: 'build/css/style.min.css',
		js: 'build/js',
		images: 'build/img',
		svg: 'build/svg',
		svgSprite: 'build/svg/sprite.svg',
		fonts: 'build/fonts',
		files: 'build/files',
		rev: 'build/rev',
		manifest: 'build/rev/rev-manifest.json'
	}
}

module.exports = config;