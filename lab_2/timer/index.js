let inputs = document.querySelectorAll("input.inp");
var timer;
setTime(1, 0);


function start() {
    let time = getTime();
    let seconds = minSecondsToSeconds(time['min'], time['sec']);
    timer = setTimeout(() => start(), 1000);
    seconds -= 1;
    if (seconds === 0) {
        clearTimeout(timer);
    }
    let buff = secondsToMinSeconds(seconds);
    setTime(buff['min'], buff['sec']);
}

function stop() {
    clearTimeout(timer);
    setTime(1, 0);
}

function pause() {
    clearTimeout(timer);
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