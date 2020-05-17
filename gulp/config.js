const config = {
	src: {
		html: 'src/templates/**/*.html',
		htmlException: '!src/templates/**/_*.html',
		styles: 'src/styles/**/*.css',
		stylesEntry: 'src/styles/style.css',
		js: 'src/js/**/*.js',
		jsEntry: './src/js/main.js',
		jsSvgSpriteLoader: 'src/js/svg-sprite-loader.js',
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
		js: 'build/js',
		jsEntry: 'build/js/main.js',
		jsEntryMin: 'build/js/main.min.js',
		php : 'build',
		svgSpriteLoader: 'build/js/svg-sprite-loader.js',
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
