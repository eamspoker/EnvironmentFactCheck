var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag

//importing file system
let urls = ["Google.com", "Americasfreedomfighters.com", "Rightwingtribune.com.", "Americaslastlineofdefense.org", "worstpot.us", "nofakenewsonline.us", "Theamericanews.co", "Americanjournalreview.com", "Americatalks.com", "thepedogate.com", "Americatalks.com:", "Americatalks.com", "BannedInformation.com", "BannedInformation.com", "BannedInformation.com", "FBnewscycle.com.", "BlingNews.com", "BlingNews.com", "CBINFO24.com", "Cbinfo24.com", "Channel23News.com", "Conservativeangle.com", "Consnation.com", "Conservativepost.com", "Theconservativetreehouse.com", "Daily-vine.com", "empirenews.net", "En-volve.com", "Fbnewscycle.com", "FBNewsCycle.com", "FBNewsCycle.com", "BannedInformation.com.", "Fellowshipoftheminds.com", "Gellerreport.com", "Infowars.com", "KAGfeed.com", "Thelibertyraise.com", "Londonwebnews.com", "MMinfo24.com", "MMinfo24.com", "Neonnettle.com", "U.S.", "U.K.", "U.K.", "Newspunch.com", "Newslo/Politicops.com", "politicops.com", "politicops.com", "NYeveningnews.com", "Patriotswalk.us", "Policetask.com", "Politicsfocus.com", "The-postillon.com", "Puppetstringnews.com", "Realnewsrightnow.com", "Rightwingtribune.com", "Americasfreedomfighters.com.", "RWNofficial.com", "Therightists.com", "SpecialNewsUSA.com", "7newspolitical.site", "Stgeorgegazette.com", "Stuppid.com", "Stuppid.com", "Teddystick.com", "Topalertnews.com", "Truthfeednews.com", "Universaleinfo.com", "Trainnews.info", "Ussanews.com", "Viralcords.com", "Viralnewspbs.site", "Viralitythings.us", "WebViners.com", "Webviners.com", "Worldnews-24.press"];


let name = document.location.host;

function fakeCheck(){

  urls.forEach(url => {
    let fullurl = ("www." + url).toLowerCase();
    if(name == fullurl){
    elementsInsideBody.forEach(element =>{
      element.childNodes.forEach(child =>{
        if(child.nodeType === 3){
          replaceText(child);
        }
      });

    });
  }
  });



}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/the/gi, "FAKE NEWS");
  value = value.replace(/the/gi, "FAKE NEWS");
  node.nodeValue = value;
}

window.onload = fakeCheck();
