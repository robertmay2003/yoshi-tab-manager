chrome.browserAction.onClicked.addListener(function () {
	chrome.storage.local.set({
		'yoshiTabManagerId': chrome.runtime.id,
		'yoshiTabManagerVideoMov': chrome.runtime.getURL('/assets/video/yoshirun_bluescreen.mov'),
		'yoshiTabManagerVideoMP4': chrome.runtime.getURL('/assets/video/yoshirun_bluescreen.mp4'),
		'yoshiTabManagerAlphaWebm': chrome.runtime.getURL('/assets/video/yoshirun_bluescreen_alpha.webm'),
		'yoshiTabManagerSongMP3': chrome.runtime.getURL('/assets/music/song' + (Math.floor(Math.random() * 8) + 1) + '.mp3')
	});
	chrome.tabs.executeScript({file: "yoshi.js"});
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log(message, sender.tab.id);
	if (message.e = 'yoshiStrike') {
		chrome.tabs.remove(sender.tab.id, function() { });
	}
});