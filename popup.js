var goButton = document.getElementById('goButton');
var thermometer = document.getElementById('thermometer');
var awayButton = document.getElementById('awayButton');
var pointDisplay = document.getElementById("pointDisplay");
var points = document.getElementById("points");
var counter = 0;
var claimed = false;

function getThermometer(){
  chrome.storage.sync.get(['reliabilty'], function(value) {
          thermometer.textContent = "Reliability: " + value.reliabilty;
        });

}

function getColor(){
  chrome.storage.sync.get(['color'], function(value) {
          thermometer.style.backgroundColor = value.color;
          thermometer.style.color = "white";
        });

}

function getPoints(){
  chrome.storage.sync.get(['points'], function(value) {
          if(value.points == 0){
          pointDisplay.textContent = "Points: " + value.points;
        } else{
          pointDisplay.textContent = "Points: " + (value.points -1);
        }
        });
}


goButton.onclick = function(element) {
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
   getColor();
   getPoints();
   goButton.textContent = "Scan";
   counter = 0;
}





 };

 awayButton.onclick = function(element) {
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     chrome.tabs.executeScript(
          tabs[0].id,
          {file: "navigate.js"});
    });
};




window.onload = getPoints();
