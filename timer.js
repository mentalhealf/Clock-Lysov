export function initTimer() {
    let timerInterval
    
  document.getElementById("content").innerHTML = `
  <div class="timer">
      <h1 id="timer-display">00:00</h1>
      <input type="number" id="timer-minutes" placeholder="Minutes">
     <div>
       <button id="start-timer">Start Timer</button>
      <button id="stop-timer">Stop Timer</button>
     </div>
  </div>
`;
const display = document.getElementById("timer-display");
const minutesInput = document.getElementById("timer-minutes");
const startButton = document.getElementById("start-timer");
const stopButton = document.getElementById("stop-timer");

startButton.addEventListener("click", () => {
    if (timerInterval) return;
    const minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes <= 0) {
      display.textContent = "Invalid input";
      return;
    }
    let remainingTime = minutes * 60 * 1000;
    timerInterval = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        display.textContent = "Time is up!";
        display.classList.add("animate-time-up"); 
      } else {
        remainingTime -= 1000;
        display.textContent = formatTime(remainingTime);
      }
    }, 1000);
  });
  stopButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    display.textContent = "00:00";
    display.classList.remove("animate-time-up"); // При зупинці прибираємо анімацію
  });
  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${pad(minutes)}:${pad(seconds)}`;
  }
  function pad(number) {
    return number.toString().padStart(2, "0");
  }
}

