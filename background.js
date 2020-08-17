//always be running while your extension is turned on 
//is useful for listening to different events, such as keyboard presses, or for navigating to different pages
const ringBell = () => {
  let audio = new Audio(chrome.runtime.getURL("./clock-bell-chimes.wav"));
  audio.play();
}

const firstBellTime = () => {
  const now = new Date();
  const nextNearestHour = now.getHours() + 1;
  const timeOfFirstBell = new Date()
  timeOfFirstBell.setHours(nextNearestHour, 0,0); //timeOfFirstBell

  return timeOfFirstBell.getTime() - now.getTime(); // difference in ms from now to first Bell
}

chrome.runtime.onInstalled.addListener(function() {    // add an action here

  const firstBell = firstBellTime();
  setTimeout(function(){
    ringBell();
    setInterval(ringBell, 60 * 60 * 1000); // every hour
  }, firstBell);

});





