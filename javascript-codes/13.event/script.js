// window.onload = function () {
//   // 문서가 로드될 때 함수를 실행

//   let text = document.getElementById('text');
//   text.innerText = 'HTML 문서 loaded';
// };


// const aElement = document.querySelector('a');
// aElement.addEventListener('click', () => {
//   alert('클릭');
// });

// const buttonElement = document.querySelector('.btn2');
// console.log('buttonElement: ', buttonElement);
// buttonElement.addEventListener('click', (event) => {
  
//   let val;
//   val = event.target;
//   val = event.target.id;
//   val = event.target.className;
//   val = event.target.classList;

//   // 윈도우로부터의 거리 좌표
//   val = event.clientY;
//   // 요소로부터의 거리 좌표
//   val = event.offsetY;

//   console.log(val);
// })


// NOTE: 이벤트 종류

const submitBtn = document.querySelector('.submit-btn');

// CLICK EVENT
submitBtn.addEventListener('click', handleEvent);
submitBtn.addEventListener('dblClick', handleEvent);
submitBtn.addEventListener('mousedown', handleEvent);
submitBtn.addEventListener('mouseup', handleEvent);
submitBtn.addEventListener('mouseenter', handleEvent);
submitBtn.addEventListener('mouseleave', handleEvent);
submitBtn.addEventListener('mousemove', handleEvent);

function handleEvent(e) {
  e.preventDefault();
  console.log(`Event Type: ${e.type}`);
  title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

// FORM EVENT
form.addEventListener('submit', handleEvent2);
emailInput.addEventListener('keydown', handleEvent2);
emailInput.addEventListener('keyup', handleEvent2);
emailInput.addEventListener('keypress', handleEvent2); // keypress : 사용자가 입력한 값이 입력되었을 때
emailInput.addEventListener('focus', handleEvent2);
emailInput.addEventListener('blur', handleEvent2);
emailInput.addEventListener('cut', handleEvent2);
emailInput.addEventListener('input', handleEvent2);

function handleEvent2(e) {
  if (e.type === 'submit') {
    e.preventDefault();
  }
  console.log(`Event Type: ${e.type}`);
  title.textContent = e.target.value;
}



