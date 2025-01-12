let clockInterval; 

export function initClock() {
  clearInterval(clockInterval); 
  document.getElementById("content").innerHTML = `
        <div class="clock">
            <h1 id="clock-display"></h1>
        </div>
    `;

  clockInterval = setInterval(() => {
    const now = new Date();
    document.getElementById("clock-display").textContent =
      now.toLocaleTimeString();
  }, 1000);
}

