const beep = require('beepbeep');
const player = require('play-sound')(opts = {});

const wrapPipe = function(taskFn) {
	return function wrapPipeInner(doneWrap) {
		const onSuccess = function() {
			if (typeof doneWrap === 'function') {
				doneWrap();
			}
		};
		const onError = function(error) {
			if (typeof doneWrap === 'function') {
				beep(3, 1000);
				player.play('WindowsCriticalStop.mp3', function(error) {
					if (error) throw error
				});
				doneWrap();
			}
		}
		const outStream = taskFn(onSuccess, onError);
		if(outStream && typeof outStream.on === 'function') {
			outStream.on('end', onSuccess);
		}
	}
}

module.exports = wrapPipe;
