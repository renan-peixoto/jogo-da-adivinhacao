// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const randomNumber = Math.round(Math.random() * 10);
let xTry = 1;

//events
btnTry.addEventListener('click', tryByClicking);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', keyDownEnter)

// funçoes
function tryByClicking(event) {
  event.preventDefault(); //não faca o padrao
  
  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2
      .querySelector("h2")
      .innerText = `Acertou em ${xTry} tentativas`
  }

  inputNumber.value = ""
  xTry++
}

function handleResetClick() {
  toggleScreen();
  xTry = 1
  document.location.reload(true)
}

function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function keyDownEnter(e){
  if(e.key == 'Enter') {
    tryByClicking();
  }
}


