import { deleteSync } from 'del';

import config from '../config.js';

// Clean
export const clean = function () {
	return deleteSync([config.dist.root + '/*/']);
};

export default clean;
