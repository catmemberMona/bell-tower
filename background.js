//always be running while your extension is turned on 
//is useful for listening to different events, such as keyboard presses, or for navigating to different pages
const bellChimes = () => {

}


const ringBell = (hour) => {
  let audio = new Audio(chrome.runtime.getURL("./clock-bell-twelve.wav")); // default 
  switch (hour % 12) {
    case 1:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-one.wav"));
      break;
    case 2:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-two.wav"));
      break;
    case 3:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-three.wav"));
      break;
    case 4:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-four.wav"));
      break;
    case 5:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-five.wav"));
      break;
    case 6:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-six.wav"));
      break;
    case 7:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-seven.wav"));
      break;
    case 8:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-eight.wav"));
      break;
    case 9:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-nine.wav"));
      break;
    case 10:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-ten.wav"));
      break;
    case 11:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-eleven.wav"));
      break;``
  
  }
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
    const now = new Date();
    const hour = now.getHours();
    ringBell(hour);
    setInterval(ringBell, 60 * 60 * 1000); // every hour
  }, firstBell);

});





