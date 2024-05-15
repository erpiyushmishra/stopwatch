let [seconds, minutes, hours]=[0,0,0];
let displayTime=document.getElementById("displayTime");
let timer=null;
let start=document.getElementById("start");
let stopped=document.getElementById("stop");
let reset=document.getElementById("reset");






function stopwatch(){
    seconds++;
    if (seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h = hours <10 ? "0" + hours : hours;
    let m = minutes <10 ? "0" + minutes : minutes;
    let s = seconds <10 ? "0" + seconds : seconds;
    displayTime.innerHTML=h +":"+ m +":"+s;
    console.log(timer)
}

function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
    
}

start.addEventListener("click", watchStart);
stopped.addEventListener("click",watchStop);
reset.addEventListener("click",watchReset);

function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displayTime.innerHTML="00:00:00"
}