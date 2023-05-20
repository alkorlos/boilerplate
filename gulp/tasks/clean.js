import { deleteAsync } from 'del';

import config from '../config.js';

// Clean
export const clean = function () {
	return deleteAsync([config.dist.root + '/*/']);
};

export default clean;
