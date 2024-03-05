module.exports = {
	plugins: {
		'postcss-import-ext-glob': {},
		'postcss-import': {},
		'postcss-preset-env': {
			stage: 2,
			features: {
				'media-query-ranges': true // fix broken css minification
			}
		}
	}
};
