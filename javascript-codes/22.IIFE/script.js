(
  function () {
    var aName = 'Barry';
  }
)();
// IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가
// console.log(aName);

var result = (function () {
  var name = 'Barry';
  return name;
})();
// 함수가 이미 실행이 됐기 때문에 결과 값을 바로 반환한다.
console.log(result);

// 이름 없는 함수를 사용할 경우
// 즉시 호출하거나, 변수로 할당되어야 한다.
(function (a, b) {
  console.log("익명함수 즉시 호출");
})()

console.log('=========================');

// const score = () => {
//   let count = 0;
//   return {
//     current: () => { return count },
//     increment: () => { count++ },
//     reset: () => { count = 0 }
//   }
// }

const score = (() => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

console.log(typeof score);
console.log(score);
// console.log(score().current());
// score().increment();
// console.log(score().current());

// NOTE: 함수가 재호출 되기 때문에 변수 count가 0으로 초기화되어 증가하지 않는다. score을 즉시 함수 실행으로 바꾸면 문제를 해결할 수 있다.

console.log(score.current());
console.log(score.increment());
console.log(score.increment());
console.log(score.increment());
console.log(score.current());
score.reset()
console.log(score.current());

console.log("=========================");

// const increment = () => {
//   let counter = 0;
//   console.log(counter);
//   const number = (num) =>
//     console.log(`it is ${num} number`);
//   return () => { counter++; number(counter); }
// };

// IIFE 사용
const increment = (() => {
  let counter = 0;
  console.log(counter);
  const number = (num) =>
    console.log(`it is ${num} number`);
    return () => { counter++; number(counter); }
})();

console.log(increment);
increment();
increment();