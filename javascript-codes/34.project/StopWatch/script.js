const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let interval;

buttonStart.onclick = function () {
  interval = setInterval(startTimer, 10);
  // setInterval을 멈추게 하려면 clearInterval을 호출한다.
  // clearInterval에는 setInterval의 return 값을 전달해줘야 한다.
  // interval 변수에 setInterval()을 할당한다.
};

buttonStop.onclick = function () {
  clearInterval(interval);
}

buttonReset.onclick = function () {
  // reset 버튼 클릭 시
  // 1. setInterval을 멈춰야 한다.
  clearInterval(interval);
  
  // 2. 데이터 초기화
  seconds = 0;
  tens = 0;
  appendSeconds.innerText = 0;
  appendTens.innerText = 0;
}

function startTimer() {
  // appendTens 100 >> appendSeconds +1
  // setInterval 1000ms => 1s / 
  // 10ms = appendTens +1
  
  tens++;
  if (tens > 99) {
    // seconds 1올리기
    seconds++;
    appendSeconds.innerText = seconds;
    // tens appendsTens => 0
    tens = 0;
    appendTens.innerText = 0;
  } else {
    appendTens.innerText = tens
  }
}