chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: 'wordsss'}, function() {
    console.log("The color is green.");
  });
});
