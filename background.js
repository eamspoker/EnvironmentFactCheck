chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({reliabilty: 'high'}, function() {
    console.log("reliabilty is high");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    console.log(document.location.host);
     chrome.declarativeContent.onPageChanged.addRules([{
       conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {},
        })
        ],
           actions: [new chrome.declarativeContent.ShowPageAction()]
     }]);
   });

});
