const ms = document.getElementById("ms");
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

ms.innerHTML = 0;
second.innerHTML = 0;
minute.innerHTML = 0;
let myInterval = "";


const setMs = () => {
    ms.innerHTML =  Number(ms.innerHTML) + 1;
    if(ms.innerHTML == 60){
        second.innerHTML =  Number(second.innerHTML) + 1;
        ms.innerHTML = 0;
    }
    if(second.innerHTML == 60){
        minute.innerHTML =  Number(minute.innerHTML) + 1;
        second.innerHTML = 0;
    }
}

function myFunction() {
    myInterval = setInterval(setMs , 14);
    start.disabled = true;
    stop.disabled = false;
}

function myFunction2() {
    clearInterval(myInterval);
    stop.disabled = true;
    start.disabled = false;
}

start.addEventListener("click" , myFunction);
stop.addEventListener("click" , myFunction2)
