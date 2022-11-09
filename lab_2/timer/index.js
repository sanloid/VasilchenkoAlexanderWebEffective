let inputs = document.querySelectorAll("input.inp");
var timer;
var onResetColor = '#fff', onPlayColor = 'green', onFinishColor = 'red', onPauseColor = 'gray';
setTime(0, 10);

function start() {
    lockInputs(true);
    setBgTo(onPlayColor);
    let time = getTime();
    let seconds = minSecondsToSeconds(time['min'], time['sec']);
    timer = setTimeout(() => start(), 1000);
    seconds -= 1;
    if (seconds === 0) {
        setBgTo(onFinishColor);
        clearTimeout(timer);
    }
    let buff = secondsToMinSeconds(seconds);
    setTime(buff['min'], buff['sec']);
}

function stop() {
    clearTimeout(timer);
    setBgTo(onResetColor);
    lockInputs(false);
    setTime(0, 10);
}

function pause() {
    clearTimeout(timer);
    setBgTo(onPauseColor);
}

function getTime() {
    return { "min": parseInt(inputs[0].value), "sec": parseInt(inputs[1].value) }
}

function setTime(min, sec) {
    inputs[0].value = min;
    inputs[1].value = sec;
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