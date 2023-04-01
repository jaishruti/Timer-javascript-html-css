import "./styles.css";

let startB = document.getElementById("start");
let stopB = document.getElementById("stop");
let resetB = document.getElementById("reset");

let tens = document.getElementById("tens");
let secs = document.getElementById("seconds");

let fiveB = document.getElementById("five");
let tenB = document.getElementById("ten");

let Interval;
// let flag;
let t;
let s;

document.getElementById("timer").innerHTML = "TIMER";

const setValue = (tensValue, secsValue) => {
  tens.innerHTML = tensValue < 10 ? "0" + tensValue : tensValue;
  secs.innerHTML = secsValue < 10 ? "0" + secsValue : secsValue;
  t = tensValue;
  s = secsValue;
};

fiveB.onclick = function () {
  clearInterval(Interval);
  setValue(100, 5);
  Interval = setInterval(timer, 10);
};

tenB.onclick = function () {
  clearInterval(Interval);
  setValue(100, 10);
  Interval = setInterval(timer, 10);
};

//reset timer
resetB.onclick = function () {
  clearInterval(Interval);
  setValue(0, 0);
};

startB.onclick = function () {
  setInterval(timer, 10);
};

//stop timer
stopB.onclick = function () {
  //won't call timer any more, stops the current execution thread
  clearInterval(Interval);
};

// Runs the timer and controls 0 before single digit, also displays cotent
const timer = () => {
  t--;

  if (t === 0) {
    t = 100;
    s = s - 1;
  }

  if (s === 0) {
    document.getElementById("timer").innerHTML = "TIMEOUT";
    t = 0;
    clearInterval(Interval);
  }
  setValue(t, s);
};
