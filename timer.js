var time = document.getElementById("h1");
var start= document.getElementById("start");
var again=document.getElementById("again");
var stop=document.getElementById("stop");
var work=document.getElementById("work");
var shortBreak= document.getElementById("shortBreak");
var longBreak= document.getElementById("longBreak");
var input= document.getElementById("minutesChange");
var save= document.getElementById("save");
var inputShort= document.getElementById("minutesChangeShort");
var inputLong= document.getElementById("minutesChangeLong")
let minutes=25;
let sec=0;
let res="";
let idInterval = null;
var numClick=0;
let shortBreakValue=5;
let longBreakValue=10;
let minutesValue=25;

start.addEventListener("click", resTimer);
again.addEventListener("click", funAgain);
work.addEventListener("click", funWork );
shortBreak.addEventListener("click", funShortBreak);
longBreak.addEventListener("click", funLongBreak );
save.addEventListener("click", funSave );

function numberClick(){
    numClick++;
    if(numClick%2==0){
        start.textContent="start";
    }
    else{start.textContent="pause";}
}

function Timer(){ 
    if(start.textContent=="pause"){

    if(idInterval){
    clearInterval(idInterval);
    }

idInterval = setInterval(() => {
    if(sec == 0){
        if(minutes > 0){
            sec = 59;
            minutes--;
        } else {
            sec = 0;
            clearInterval(idInterval);
            play(); 
        }
    } else {
        sec--;
    }
    printRes();
}, 1000); 
}
else{
    clearInterval(idInterval);
}
    
}

function resTimer(){
    numberClick();
    Timer();
}

function funAgain(){
    minutes=minutesValue;
    sec=0;
    printRes();
    Timer();
}

function funWork(){
    minutes=minutesValue;
    sec=0;
    printRes();
    Timer();
}

function funShortBreak(){
    minutes=shortBreakValue;
    sec=0;
    printRes();
    Timer();
}

function funLongBreak(){
    minutes=longBreakValue;
    sec=0;
    printRes();
    Timer();
}

document.getElementById('settingsButton').addEventListener('click', function() {
    var container = document.getElementById('settingsContainer');
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
    } else {
        container.classList.add('hidden');
    }
});

document.getElementById("exit").addEventListener("click", function(){
    var container = document.getElementById("settingsContainer"); 
        container.classList.add('hidden');
});

function printRes(){
    
    if( sec<10 && minutes>=10){
        res = minutes+".0"+sec;
        time.textContent = res;
    }
    else if( sec<10 && minutes<10){
        res = "0"+minutes+".0"+sec;
        time.textContent = res;
    }
    else if(minutes<10&&sec>=10){
        res = "0"+minutes+"."+sec;
        time.textContent = res;
    }
    else{
        res = minutes+"."+sec;
        time.textContent = res;} 
}

function funSave(){
    minutesValue=input.value;
    shortBreakValue = inputShort.value;
    longBreakValue = inputLong.value;
    if(minutesValue!==25){
        minutes=minutesValue;
        printRes();
    } 

    var container = document.getElementById("settingsContainer");
    setTimeout(function(){
        //Работа с измен. фона в настройках
        var bodyElement = document.body;
        var sectionBackground= document.getElementById("fon-select");
        var value = sectionBackground.value;
        bodyElement.style.backgroundImage= "url("+value+")";
        container.classList.add("hidden");
    }, 1000);

}


function play(){
    var sectionSound= document.getElementById("sounds-select")
    var value= sectionSound.value;
    var audio = new Audio(value);
    audio.addEventListener('canplaythrough', function() {
        audio.play();
    });
}