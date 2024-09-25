
function NewWindow() {
	windowscreate = chrome.windows.create({
		height:600,
		width:800,
		type:"popup",
		url:chrome.runtime.getURL("Main.html")
    });
}
chrome.browserAction.onClicked.addListener(NewWindow);	

function handleInstalled(details) {
    browser.tabs.create({
        url: "https://electricalcodes.blogspot.com"
    });
}
//browser.runtime.onInstalled.addListener(handleInstalled);
