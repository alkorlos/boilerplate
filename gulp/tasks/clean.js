const del = require('del');

const config = require('../config');

// Clean
const clean = function () {
	return del(config.dist.root + '/**/*');
};

module.exports = clean;
