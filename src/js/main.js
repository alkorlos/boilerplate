import 'focus-visible'; // Полифил для :focus-visible
import objectFitImages from 'object-fit-images'; // Полифил для object-fit

import {ui} from './ui';

document.addEventListener('DOMContentLoaded', function() {
	objectFitImages(); // Полифил для object-fit

	ui();
})
