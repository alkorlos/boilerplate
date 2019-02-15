const del = require('del')

const config = require('../config');

// Clean
const clean = function(done) {
	del(config.build.root + '/**/*');
	done();
}

module.exports = clean;
