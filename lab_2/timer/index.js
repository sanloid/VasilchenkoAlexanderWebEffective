let inputs = document.querySelectorAll("input.inp");
var timer;
var onResetColor = '#fff', onPlayColor = 'green', onFinishColor = 'red', onPauseColor = 'gray';
var audio = new Audio('./riseNshine.mp3');

let localMin = localStorage.getItem('min'), localSec = localStorage.getItem('sec'), localState = localStorage.getItem('state');
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
    document.querySelector('button.start').disabled = true;
    localStorage.setItem('state', 'start');
    lockInputs(true);
    setBgTo(onPlayColor);
    let time = getTime();
    let seconds = minSecondsToSeconds(time['min'], time['sec']);
    timer = setTimeout(() => start(), 1000);
    seconds -= 1;
    if (seconds <= 0) {
        setBgTo(onFinishColor);
        clearTimeout(timer);
        audio.play();
        setTime(0, 0);
    } else {
        let buff = secondsToMinSeconds(seconds);
        setTime(buff['min'], buff['sec']);
    }
}

function stop() {
    document.querySelector('button.start').disabled = false;
    localStorage.setItem('state', 'stop');
    clearTimeout(timer);
    setBgTo(onResetColor);
    lockInputs(false);
    setTime(0, 10);
    audio.pause();
    audio.currentTime = 0;
}

function pause() {
    document.querySelector('button.start').disabled = false;
    lockInputs(true);
    localStorage.setItem('state', 'pause');
    clearTimeout(timer);
    setBgTo(onPauseColor);
}

function getTime() {
    return { "min": parseInt(inputs[0].value), "sec": parseInt(inputs[1].value) }
}

function setTime(min, sec) {
    inputs[0].value = min;
    inputs[1].value = sec;
    localStorage.setItem('min', inputs[0].value);
    localStorage.setItem('sec', inputs[1].value);
}

function secondsToMinSeconds(sec) {
    return { "min": (sec - (sec % 60)) / 60, "sec": sec % 60 }
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
}

inputs[0].addEventListener('input', () => {
    localStorage.setItem('min', inputs[0].value);
})

inputs[1].addEventListener('input', () => {
    localStorage.setItem('sec', inputs[1].value);
})