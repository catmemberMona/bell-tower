//always be running while your extension is turned on 
//is useful for listening to different events, such as keyboard presses, or for navigating to different pages

function ringBell(hour) {
  let audio = new Audio(chrome.runtime.getURL("./clock-bell-twelve.wav")); // default 12 chimes
  switch (hour % 12) {
    case 1:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-one.wav"));
      console.log('hour file run:', 1)
      break;
    case 2:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-two.wav"));
      console.log('hour file run:', 2)
      break;
    case 3:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-three.wav"));
      console.log('hour file run:', 3)
      break;
    case 4:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-four.wav"));
      console.log('hour file run:', 4)
      break;
    case 5:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-five.wav"));
      console.log('hour file run:', 5)
      break;
    case 6:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-six.wav"));
      console.log('hour file run:', 6)
      break;
    case 7:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-seven.wav"));
      console.log('hour file run:', 7)
      break;
    case 8:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-eight.wav"));
      console.log('hour file run:', 8)
      break;
    case 9:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-nine.wav"));
      console.log('hour file run:', 9)
      break;
    case 10:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-ten.wav"));
      console.log('hour file run:', 10)
      break;
    case 11:
      audio = new Audio(chrome.runtime.getURL("./clock-bell-eleven.wav"));
      console.log('hour file run:', 11)
      break;``
    default:
      console.log('hour file run:', 12)
      break;
  
  }
  audio.play();
}


const firstBellTime = () => {
  // current time 
  const now = new Date();
  // get next closest hour integer between 0 and 23 inclusive
  const nextNearestHour = now.getHours() + 1;

  console.log('next nearest hour:', nextNearestHour)
  // set time Of First Bell
  let timeOfFirstBell = new Date();
  const time = timeOfFirstBell.setHours(nextNearestHour, 00, 00, 00); 
  // timeOfFirstBell.setHours(nextNearestHour, 15); // testing only

  console.log('time of first bell is:', timeOfFirstBell , 'or: ', time, 'now time:', now.getTime())

  // difference in ms from now to first Bell
  const timeRemaining = timeOfFirstBell.getTime() - now.getTime(); 
  // return 2000; // testing only
  console.log('time remaining:',timeRemaining )
  return timeRemaining;
}

chrome.runtime.onInstalled.addListener(function() { 
  // ms to next hour
  const firstBell = firstBellTime();
  const hourInMs = 1000 * 60 * 60;
  // const firstBell = 2000; // testing only
  // const hourInMs = 1000 * 30; // testing only
  console.log('time to first bell:', firstBell)
  console.log('ms in an hour:', hourInMs);
 
  setTimeout(function(){
    const now = new Date();
    // next closest hour 
    let hour = now.getHours() + 1;

    // rings the first bell after download
    ringBell(hour);
    console.log('first bell time:', hour % 12)
    
    // rings the bells after the first
    setInterval(()=> {
      hour += 1;
      console.log('every hour after:', hour % 12)
      ringBell(hour);
    }, hourInMs);

  }, firstBell);
});





