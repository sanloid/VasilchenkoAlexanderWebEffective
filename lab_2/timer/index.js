let inputs = document.querySelectorAll("input.inp");
let timer;
const onResetColor = '#fff', onPlayColor = 'green', onFinishColor = 'red', onPauseColor = 'gray';
let audio = new Audio('./riseNshine.mp3');

let localMin = localStorage.getItem('min');
let localSec = localStorage.getItem('sec');
let localState = localStorage.getItem('state');

let timeBtns = document.querySelectorAll('button.time-btn');
let startBtn = document.querySelector('button.start');

if (!localMin && !localSec && !localState) {
    setTime(0, 10);
} else {
    setTime(parseInt(localMin), parseInt(localSec));
    switch (localState) {
        case "start": start();
            break;
        case "pause": pause();
            break;
    }
}

function start() {
    startBtn.disabled = true;
    localStorage.setItem('state', 'start');
    lockInputs(true);
    setBgTo(onPlayColor);
    const time = getTime();
    let seconds = minSecondsToSeconds(time.min, time.sec);
    timer = setTimeout(() => start(), 1000);
    seconds -= 1;
    if (seconds <= 0) {
        setBgTo(onFinishColor);
        clearTimeout(timer);
        audio.play();
        setTime(0, 0);
        return
    }
    let buff = secondsToMinSeconds(seconds);
    setTime(buff.min, buff.sec);
}

function stop() {
    startBtn.disabled = false;
    localStorage.setItem('state', 'stop');
    clearTimeout(timer);
    setBgTo(onResetColor);
    lockInputs(false);
    setTime(0, 10);
    audio.pause();
    audio.currentTime = 0;
}

function pause() {
    startBtn.disabled = false;
    lockInputs(true);
    localStorage.setItem('state', 'pause');
    clearTimeout(timer);
    setBgTo(onPauseColor);
}

function getTime() {
    return { min: parseInt(inputs[0].value), sec: parseInt(inputs[1].value) }
}

function setTime(min, sec) {
    inputs[0].value = min;
    inputs[1].value = sec;
    localStorage.setItem('min', inputs[0].value);
    localStorage.setItem('sec', inputs[1].value);
}

function secondsToMinSeconds(sec) {
    return { min: (sec - (sec % 60)) / 60, sec: sec % 60 }
}

function minSecondsToSeconds(min, sec) {
    return min * 60 + sec
}

function setBgTo(color) {
    document.body.style.backgroundColor = color;
}


function lockInputs(lock) {
    inputs[0].disabled = lock;
    inputs[1].disabled = lock;
    timeBtns.forEach((element, i) => {
        element.disabled = lock;
    })
}

inputs[0].addEventListener('input', () => {
    localStorage.setItem('min', inputs[0].value);
})

inputs[1].addEventListener('input', () => {
    localStorage.setItem('sec', inputs[1].value);
})

const timesArray = [1, 5, 10]
timeBtns.forEach((element, i) => {
    element.addEventListener('click', () => {
        setTime(timesArray[i], 0);
    })
})
