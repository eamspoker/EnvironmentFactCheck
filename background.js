chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log(document.location.host);
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    console.log(document.location.host);
     chrome.declarativeContent.onPageChanged.addRules([{
       conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.w3schools.com'},
        })
        ],
           actions: [new chrome.declarativeContent.ShowPageAction()]
     }]);
   });

});
