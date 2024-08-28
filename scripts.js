let timer;
let isRunning = false;
let elapsedTime = 0;

const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');
const millisecondsElem = document.getElementById('milliseconds');

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
    timer = setInterval(updateTime, 10);
}

function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timer);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    elapsedTime = 0;
    updateDisplay();
    if (isRunning) stopTimer();
    resetButton.disabled = true;
}

function updateTime() {
    elapsedTime += 10;
    updateDisplay();
}

function updateDisplay() {
    const milliseconds = Math.floor(elapsedTime % 1000 / 10);
    const seconds = Math.floor(elapsedTime / 1000 % 60);
    const minutes = Math.floor(elapsedTime / 60000 % 60);
    const hours = Math.floor(elapsedTime / 3600000);

    millisecondsElem.textContent = String(milliseconds).padStart(2, '0');
    secondsElem.textContent = String(seconds).padStart(2, '0');
    minutesElem.textContent = String(minutes).padStart(2, '0');
    hoursElem.textContent = String(hours).padStart(2, '0');
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
