import { initClock } from "./clock.js";
import { initAlarm } from "./alarm.js";
import { initStopwatch } from "./stopwatch.js";
import { initTimer } from "./timer.js";



let currentView = null;
function loadView(viewFunction) {
    if (currentView === viewFunction) return; 
    currentView = viewFunction;
    viewFunction();
  }
  
  

  
document
.getElementById("clock-btn")
.addEventListener("click", () => loadView(initClock));
document
  .getElementById("alarm-btn")
  .addEventListener("click", () => loadView(initAlarm));
  document
  .getElementById("stopwatch-btn")
  .addEventListener("click", () => loadView(initStopwatch));
  document
  .getElementById("timer-btn")
  .addEventListener("click", () => loadView(initTimer));





loadView(initClock);