var current = parseInt(localStorage.getItem('current'));
if (localStorage.getItem('current') === null) {
    localStorage.setItem('current', 0);
    current = 0;
}

let imgs = document.querySelectorAll('img.slider__img')
imgs[current].classList.remove('hide');
var interval = setInterval(() => move(1), 6000);


function move(increment) {
    clearInterval(interval);
    interval = setInterval(() => move(1), 6000);
    current += increment;

    if (current === imgs.length) {
        current = 0;
    }

    if (current === -1) {
        current = imgs.length - 1;
    }

    localStorage.setItem('current', current);

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.add('hide')
    }

    imgs[current].classList.remove('hide')
}

document.addEventListener('keydown', (event) => {
    const keyCode = event.key;

    if (keyCode === "ArrowRight") {
        move(1);
    }
    if (keyCode === "ArrowLeft") {
        move(-1);
    }
    if (keyCode === " ") {
        move(1);
    }
}, false);