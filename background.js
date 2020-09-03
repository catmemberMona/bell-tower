//always be running while your extension is turned on 
//is useful for listening to different events, such as keyboard presses, or for navigating to different pages

function ringBell(hour) {
  let audio = new Audio(chrome.runtime.getURL("./clock-bell-twelve.wav")); // default 12 chimes
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
    default:
      break;
  
  }
  audio.play();
}


// const firstBellTime = () => {
//   const now = new Date();
//   const nextNearestHour = now.getHours() + 1;
//   const timeOfFirstBell = new Date();
//   timeOfFirstBell.setHours(nextNearestHour); //timeOfFirstBell
//   // timeOfFirstBell.setHours(nextNearestHour, 15); // testing only

//   // return timeOfFirstBell.getTime() - now.getTime(); // difference in ms from now to first Bell
//   return 2000; // testing only
// }

chrome.runtime.onInstalled.addListener(function() {    // add an action here

  // const firstBell = firstBellTime();
  const hourInMs = 1000 * 60 * 60;
  const firstBell = 2000; // testing only
  // const hourInMs = 1000 * 30; // testing only
  
  setTimeout(function(){
    const now = new Date();
    const hour = now.getHours() + 1;

    ringBell(hour);
    setInterval(ringBell, hourInMs, hour); // every hour
  }, firstBell);

});





