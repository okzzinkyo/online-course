// NOTE: Closure
// 외부 함수가 실행되어 return 값인 내부함수가 newFunction에 할당되어도, 외부 함수에서 정의한 변수 및 범위에 접근할 수 있다.

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer function:` + outerVariable); // outside
    console.log(`Inner function:` + innerVariable); // inside
  };
}

const newFunction = outerFunction('outside');
console.log('newFunction: ', newFunction);

newFunction('inside');

let a = 'a';
// function functionB() {
//   let c = 'c';
//   // NOTE: 스코프에 변수 b가 존재하지 않아 Error
//   console.log(a, b, c);
// }

// function functionA() {
//   let b = 'b';
//   console.log(a, b);
//   functionB();
// }

// 스코프를 활용해서 내부함수가 외부함수의 변수에 접근할 수 있게 해결
function functionA() {
  let b = 'b';
  function functionB() {
    let c = 'c';
    console.log(a, b, c);
  }
  functionB();
  console.log(a, b);
}

functionA();
