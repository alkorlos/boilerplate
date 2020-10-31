import del from 'del';

import { config } from '../config.js';

// Clean
export const clean = function () {
	return del(config.dist.root + '/**/*');
};
