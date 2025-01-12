export function initStopwatch() {
    let startTime = null;
    let elapsedTime = 0;
    let timerInterval;
    document.getElementById("content").innerHTML = `
    <div class="stopwatch">
        <h1 id="stopwatch-display">00:00.00</h1>
        <button id="start-stopwatch">Start</button>
        <button id="stop-stopwatch">Stop</button>
        <button id="reset-stopwatch">Reset</button>
    </div>
`;
const display = document.getElementById("stopwatch-display");
const startButton = document.getElementById("start-stopwatch");
const stopButton = document.getElementById("stop-stopwatch");
const resetButton = document.getElementById("reset-stopwatch");
startButton.addEventListener("click", () => {
    if (timerInterval) return;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10);
  });
  stopButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
  });
  resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    display.textContent = "00:00.00";
  });
  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
  }
  function pad(number) {
    return number.toString().padStart(2, "0");
  }
};

