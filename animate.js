const span = document.getElementsByTagName('span')[0];
let pos = 1;
let interval = setInterval(move, 15);

function move() {
    if (pos >= 100) {
        clearInterval(interval);
        pos = 1;
        interval = setInterval(move, 15);
    } else {
        pos++;
        span.style.width = pos + '%';
    }
}
