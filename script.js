const ms = document.getElementById("ms");
const second = document.getElementById("second");
ms.innerHTML = 0;
second.innerHTML = 0;




const setSecond = () => {
    second.innerHTML =  Number(second.innerHTML) + 1;
}


const setMs = () => {
    ms.innerHTML =  Number(ms.innerHTML) + 1;
    if(ms.innerHTML == 60){
        second.innerHTML =  Number(second.innerHTML) + 1;
        ms.innerHTML = 0;
    }

}


setInterval(setMs , 14);