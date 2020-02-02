var goButton = document.getElementById('goButton');
var thermometer = document.getElementById('thermometer');
var counter = 0;
function getThermometer(){
  chrome.storage.sync.get(['reliabilty'], function(value) {
          thermometer.textContent = "Reliability: " + value.reliabilty;
        });

}

goButton.onclick = function(element) {
  console.log("clicked!")
  if(counter == 0){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
         tabs[0].id,
         {file: "content.js"});
   });
   thermometer.textContent = "Reliability: ";
   goButton.textContent = "Show Results";
   counter += 1;
} else{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
         tabs[0].id,
         {file: "content.js"});
   });

   getThermometer();
   goButton.textContent = "Scan";
   counter = 0;
}





 };
