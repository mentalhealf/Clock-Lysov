export function initAlarm() {
    document.getElementById("content").innerHTML = `
    <div class="alarm">
        <h1>Set Alarm</h1>
        <input type="time" id="alarm-time">
        <button id="set-alarm">Set Alarm</button>
        <p id="alarm-message"></p>
    </div>
`;

const setAlarmButton = document.getElementById("set-alarm");
const alarmMessage = document.getElementById("alarm-message");

  const ringtone = new Audio("./Ringtong/ringtong_August.mp3");

  setAlarmButton.addEventListener("click", () => {
    const alarmTime = document.getElementById("alarm-time").value;

    if (!alarmTime) {
      alarmMessage.textContent = "Please set a valid time.";
      return;
    }

    setAlarmButton.style.backgroundColor = "green";
    setAlarmButton.textContent = "Alarm Set!";
    alarmMessage.textContent = "";

    const alarm = new Date();
    const [hours, minutes] = alarmTime.split(":");
    alarm.setHours(hours, minutes, 0);

    const checkAlarm = setInterval(() => {
      const now = new Date();
      if (now >= alarm) {
        clearInterval(checkAlarm);
        alarmMessage.textContent = "Wake up!";
        alarmMessage.classList.add("animate-wake-up");
        ringtone.play();
      }
    }, 1000);
  });
}
// setAlarmButton.addEventListener("click", () => {
//     const alarmTime = document.getElementById("alarm-time").value;
//     const alarmMessage = document.getElementById("alarm-message");
//     if (!alarmTime) {
//         alarmMessage.textContent = "Please set a valid time.";
//         return;
//       }
//       setAlarmButton.style.backgroundColor = "green";
//       setAlarmButton.textContent = "Alarm Set!";
//       const alarm = new Date();
//       const [hours, minutes] = alarmTime.split(":");
//       alarm.setHours(hours, minutes, 0);
//       const checkAlarm = setInterval(() => {
//         const now = new Date();
//         if (now >= alarm) {
//           alarmMessage.textContent = "Wake up!";
//           alarmMessage.classList.add("animate-wake-up"); 
//           clearInterval(checkAlarm);
//         }
//       }, 1000);
// })
// }



