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

// const getNextBell = () => {
//   const currentDate = new Date();
//   const currentHour = currentDate.getHours();
//   const nextNearestHour = ((currentHour - 12 + 1) < 1) ? currentHour + 1 : currentHour - 12 + 1; // nearest time it should ring in 12hourTime

//   return nextBell
// }

// getNextBell()




