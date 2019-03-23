window.requestAnimationFrame(() => {
	function createVideoElem(src) {
		let vid = document.createElement('video');

		let sourceMP4 = document.createElement('source');
		sourceMP4.type = 'video/mp4';
		sourceMP4.src = src;
		vid.appendChild(sourceMP4);

		vid.id = 'yoshiTabManagerVideo';
		vid.autoplay = true;

		setTimeout(()=> {
			chrome.runtime.sendMessage({e: 'yoshiStrike'});
		}, 23700);

		return vid
	}

	function createAudioElem(src) {
		let aud = document.createElement('audio');

		let sourceMP3 = document.createElement('source');
		sourceMP3.type = 'audio/mp3';
		sourceMP3.src = src;
		aud.appendChild(sourceMP3);

		aud.autoplay = true;
		aud.id = 'yoshiTabManagerAudio';

		return aud
	}

	function setupVideo(result) {
		let video = createVideoElem(result.yoshiTabManagerAlphaWebm);
		let audio = createAudioElem(result.yoshiTabManagerSongMP3);

		document.body.appendChild(video);
		document.body.appendChild(audio);

		// Maintain video speed when tab changes

		let startTime = new Date();

		$(window).focus(function() {
			video.currentTime = ((new Date().getTime() - startTime.getTime()) + 33) / 1000;
		});
	}

	if (!window.yoshiTabManagerCalled) {
		window.yoshiTabManagerCalled = true;
		chrome.storage.local.get(['yoshiTabManagerAlphaWebm', 'yoshiTabManagerSongMP3'], function(result) {
			setupVideo(result);
		});
	}
});
