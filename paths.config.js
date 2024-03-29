export const config = {
	src: {
		templates: './src/templates/',
		templatesPages: './src/templates/pages/*.njk',
		templatesException: '!./src/templates/**/_*.njk',
		styles: './src/styles/**/*.pcss',
		stylesEntry: './src/styles/style.pcss',
		scriptsEntry: './src/scripts/main.js',
		php: './src/php/**/*.php',
		images: './src/images/**/*.{avif,webp,jpg,jpeg,png,svg}',
		favicon: './src/favicon.ico',
		svg: './src/svg/**/*.svg',
		videos: './src/videos/**/*.{webm,mp4}',
		fonts: './src/fonts/**/*.{ttf,otf,woff,woff2}',
		files: './src/files/**/*'
	},
	dist: {
		html: './dist',
		htmlEntry: './dist/index.html',
		css: './dist/css',
		cssEntryMin: './dist/css/style.min.css',
		js: './dist/js',
		jsEntryMin: './dist/js/main.min.js',
		php: './dist/php',
		images: './dist/images',
		favicon: './dist',
		svg: './dist/svg',
		svgSprite: './dist/svg/sprite.svg',
		videos: './dist/videos',
		fonts: './dist/fonts',
		files: './dist/files',
		rev: './dist/rev',
		manifest: './dist/rev/rev-manifest.json'
	}
};

export default config;
