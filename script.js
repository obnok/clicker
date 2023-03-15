var interval = window.setInterval(callBack, 1000);
var LPS = 0;

function callBack() {
    const counter = document.getElementById('countNum');
    counter.innerHTML = parseInt(counter.innerHTML,10) + LPS;
}

function increment() {
    const counter = document.getElementById('countNum');
    counter.innerHTML = (parseInt(counter.innerHTML,10)+1);
}

function upgrade25() {
    const counter = document.getElementById('countNum');
    let num = parseInt(counter.innerHTML,10);
    if (num >= 25) {
        document.getElementById('upgradeMe').innerHTML = 'Upgraded Lee Clicker';
        counter.innerHTML = num - 25;
    }
}

function autoLee1() {
    const counter = document.getElementById('countNum');
    const oneSec = document.getElementById('oneSec');
    let num = parseInt(counter.innerHTML,10);
    if (num >= 50) {
        LPS++;
        counter.innerHTML = num - 50;
        oneSec.innerHTML = parseInt(oneSec.innerHTML,10)+1;
    }
}