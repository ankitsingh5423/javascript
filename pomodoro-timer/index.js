// store all the useful item in variable
// start button per click karne pe timer start karna hai
// stop per stop
// reset per reset
// 0 anne per ek alert bhejna hai

const btnStart = document.querySelectorAll(".btn-start");
const btnStop = document.querySelectorAll(".btn-stop");
const btnReset = document.querySelectorAll(".btn-reset");
const timer = document.querySelector(".timer");
const timerArray = timer.innerHTML.split(":");

// console.log(timerArray);

let sec = +timerArray[0] * 60 + +timerArray[1];
// console.log(sec);

let CountDown = () => {
  counter = setInterval(() => {
    --sec;
    const minute = Math.floor(sec / 60);
    const second = sec % 60;
  }, 1000);
};

CountDown();
