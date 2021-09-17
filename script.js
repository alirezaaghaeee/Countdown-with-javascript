let dayInput = document.querySelector(".day input");
let hourInput = document.querySelector(".hour input");
let mintueInput = document.querySelector(".mintue input");
let secondInput = document.querySelector(".second input");
let alertText=document.querySelector('.text ');
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".Reset");
let timer=false;



let interval;
function reset() {
if( secondInput.value === "0" &&
mintueInput.value === "0" &&
hourInput.value === "0" &&
dayInput.value === "0"){
  alertText.innerHTML='The Countdown timer has already been reset';
  alertText.classList.remove('bg-success')
  alertText.classList.add('red')
}else{
  dayInput.value = 0;
  hourInput.value= 0;
  mintueInput.value = 0;
  secondInput.value = 0;
  alertText.innerHTML='Countdown timer reset';
  alertText.classList.remove('bg-success')
  alertText.classList.add('red')
  timer=false;
  clearInterval(interval);
}



  
  
  
}

function start() {
  if (
    secondInput.value === "0" &&
    mintueInput.value === "0" &&
    hourInput.value === "0" &&
    dayInput.value === "0"
  ) {
    alertText.innerHTML='Please enter the time'
    return;
  } else {
    alertText.innerHTML='Countdown timer is on'
    timer=true;

    interval = setInterval(function () {
      if ( secondInput.value === "0") {
        if ( mintueInput.value === "0") {
          if ( hourInput.value === "0") {
            if (dayInput.value === "0") {
              alert("Countdown timer finish");
              clearInterval(interval);
              timer=false;
            } else {
              dayIndayInput.valueput = dayInput.value - 1;
               hourInput.value = 23;
               mintueInput.value = 59;
              secondInput.value = 59;
            }
          } else {
             hourInput.value =  hourInput.value - 1;
             mintueInput.value = 59;
             secondInput.value = 59;
          }
        } else {
           mintueInput.value =  mintueInput.value - 1;
           secondInput.value = 59;
        }
      } else {
         secondInput.value =  secondInput.value - 1;
      }
    }, 1000);
  }
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", function (el) {
  if(timer){
    clearInterval(interval);
    alertText.innerHTML='The Countdown timer stopped';
   el.target.innerHTML='Resume'
    timer=false
  }else{
    alertText.innerHTML='The Countdown timer is active again'
    el.target.innerHTML='Stop';
    start();
  }
  
});
resetButton.addEventListener("click", reset);
