import randomIntegerFromInterval from "./utils.js";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const body = document.querySelector("body");
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let intervalId = null;

const bodyColor = (arr, random) => {
  const index = random(0, arr.length - 1);
  const color = arr[index];
  body.style.backgroundColor = arr[index];
};

const changeBodyColor = () => {
  intervalId = setInterval(() => {
    bodyColor(colors, randomIntegerFromInterval);
  }, 1000);
  startBtn.disabled = true;
};

const stopChange = () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
};

startBtn.addEventListener("click", changeBodyColor);
stopBtn.addEventListener("click", stopChange);
