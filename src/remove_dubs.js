chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			$("cite").each((i, cite) => {
				if (cite.innerHTML.includes(" Dub)") || cite.innerHTML.includes("(Dub)")) {
					cite.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
				}
			});
		}
	}, 10);
});