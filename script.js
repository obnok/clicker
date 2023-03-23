var interval = window.setInterval(callBack, 1000);
var LPS = 0;
let inc = 1;

function callBack() {
    const counter = document.getElementById('countNum');
    counter.innerHTML = parseInt(counter.innerHTML,10) + LPS;
}

function increment() {
    const counter = document.getElementById('countNum');
    counter.innerHTML = (parseInt(counter.innerHTML,10) + inc);
}

document.getElementById('upgradeClick').addEventListener("click", function() {
    const counter = document.getElementById('countNum');
    const oneClick = document.getElementById('oneClick');
    let num = parseInt(counter.innerHTML,10);
    if (num >= 1000) {
        inc++;
        counter.innerHTML = num - 1000;
        oneClick.innerHTML = "Lee's Per Click: " + 5;
        document.getElementById("face").src="bald.png";
    }
});

document.getElementById('upgradeAuto').addEventListener("click", function() {
    const counter = document.getElementById('countNum');
    const oneSec = document.getElementById('oneSec');
    let num = parseInt(counter.innerHTML,10);
    if (num >= 50) {
        LPS++;
        counter.innerHTML = num - 50;
        oneSec.innerHTML = "AutoLee's Per Second: " + parseInt(oneSec.innerHTML,10)+1;
    }
});