let goButton = document.getElementById('goButton');
let thermometer = document.getElementById('thermometer');
function getThermometer(){
  chrome.storage.sync.get(['reliabilty'], function(value) {
          thermometer.textContent = "Reliability: " + value.reliabilty;
        });

}

goButton.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.executeScript(
       tabs[0].id,
       {file: "content.js"});
 });


   getThermometer();

 };
