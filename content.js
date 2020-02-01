var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag

//importing file system
let urls = ["Developer.Chrome.com", "W3Schools.com", "Americasfreedomfighters.com", "Rightwingtribune.com.", "Americaslastlineofdefense.org", "worstpot.us", "nofakenewsonline.us", "Theamericanews.co", "Americanjournalreview.com", "Americatalks.com", "thepedogate.com", "Americatalks.com:", "Americatalks.com", "BannedInformation.com", "BannedInformation.com", "BannedInformation.com", "FBnewscycle.com.", "BlingNews.com", "BlingNews.com", "CBINFO24.com", "Cbinfo24.com", "Channel23News.com", "Conservativeangle.com", "Consnation.com", "Conservativepost.com", "Theconservativetreehouse.com", "Daily-vine.com", "empirenews.net", "En-volve.com", "Fbnewscycle.com", "FBNewsCycle.com", "FBNewsCycle.com", "BannedInformation.com.", "Fellowshipoftheminds.com", "Gellerreport.com", "Infowars.com", "KAGfeed.com", "Thelibertyraise.com", "Londonwebnews.com", "MMinfo24.com", "MMinfo24.com", "Neonnettle.com", "Newspunch.com", "Newslo/Politicops.com", "politicops.com", "politicops.com", "NYeveningnews.com", "Patriotswalk.us", "Policetask.com", "Politicsfocus.com", "The-postillon.com", "Puppetstringnews.com", "Realnewsrightnow.com", "Rightwingtribune.com", "Americasfreedomfighters.com.", "RWNofficial.com", "Therightists.com", "SpecialNewsUSA.com", "7newspolitical.site", "Stgeorgegazette.com", "Stuppid.com", "Stuppid.com", "Teddystick.com", "Topalertnews.com", "Truthfeednews.com", "Universaleinfo.com", "Trainnews.info", "Ussanews.com", "Viralcords.com", "Viralnewspbs.site", "Viralitythings.us", "WebViners.com", "Webviners.com", "Worldnews-24.press"];


let fullname = document.location.host;
let name = "";
let fullurl = "";

function fakeCheck(){
  let val = "high";
  urls.forEach(url => {
    name = fullname.replace("www\.", "");
    fullurl = (url).toLowerCase();
    if(name == fullurl){
      val = "low";
    }
  });

  setThermometer(val);


}

function setThermometer(value){
  chrome.storage.sync.set({reliabilty: value}, function() {
          console.log('Value is set to ' + value);
        });
}


function replaceText (node, text) {
  let value = node.nodeValue;
  value = value.replace(/Chrome/gi, text);
  value = value.replace(/The/gi, text);
  node.nodeValue = value;
}
