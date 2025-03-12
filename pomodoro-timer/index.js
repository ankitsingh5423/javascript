// store all the useful item in variable
// start button per click karne pe timer start karna hai
// stop per stop
// reset per reset
// 0 anne per ek alert bhejna hai

const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");
let timer = document.querySelector(".timer");
const defaultMin = "25:00";

// console.log(timerArray);

// console.log(sec);
let counter;

let isTimerStarted = false;

let CountDown = () => {
  if (!isTimerStarted) {
    let timerArray = timer.innerHTML.split(":");
    let sec = +timerArray[0] * 60 + +timerArray[1];

    counter = setInterval(() => {
      --sec;
      const minute = Math.floor(sec / 60);
      const second = sec % 60;
      // console.log(minute,second)
      timer.innerHTML = `${minute}:${second}`;
    }, 1000);
    isTimerStarted = true;
  }
};

let stopCounter = () => {
  if (isTimerStarted) {
    clearInterval(counter);
    isTimerStarted = false;
  }
};

btnStart.addEventListener("click", CountDown);
btnStop.addEventListener("click", stopCounter);
btnReset.addEventListener("click", () => {
  stopCounter();
  timer.innerHTML = defaultMin;
});
