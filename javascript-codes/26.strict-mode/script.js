// NOTE: strict mode 적용 방법
// 1. 파일 상단 지시자 사용
"use strict"

// 2. 함수 스코프 내에서 사용
function sum(a, b) {
  "use strict"
  return a + b;
}

// 3. class 사용
class Cat {

}

// 4. script 파일 type "module"
// <script src='script.js' type='module'></script>

// let greeting = 'hello';
// greating = 'hi';
// console.log(greeting);
// console.log(greeting, window.greating);

// undefined = 8
// NaN = 10
// console.log(undefined);
// console.log(NaN);

// const obj = {};
// Object.defineProperty(obj, "readOnly", {
//   writable: false, value: 7
// })
// console.log(obj);
// obj.readOnly = 10;
// console.log(obj);

// const obj = {
//   get readOnly() {
//     return 7;
//   }
// }
// console.log(obj.readOnly);
// obj.readOnly = 10;
// console.log(obj.readOnly);

// function add(a, a, b) {
//   return a + a + b;
// }
// console.log(1,2,3);

// "string".prop = 7;
// console.log('string'.prop);

//NOTE: strict 모드에서 함수 내 this는 undefined를 가리킨다.
// bind 함수로 this를 바인드 해주면 해결 가능하다.
// function sum(a, b) {
//   console.log(this);
//   return a + b;
// }

// console.log(this);
// sum(1, 2);
// sum.bind(this)(1, 2);
