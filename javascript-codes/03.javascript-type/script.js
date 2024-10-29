// NOTE: javascript는 동적 타입이다.
let foo = 42;
foo = 'bar'
foo = true

console.log(typeof foo);

// NOTE: 원시 타입

// 문자열 String
const name = 'ock';
// 숫자 Number
const age = 30;
// Boolean
const ockJob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = Symbol();

// NOTE: 참조 타입
// Array 배열
const hobbies = ['walking', 'books'];
// Object 객제
const address = {
  province: '경기도',
  city: '성남시'
}

console.log(typeof hobbies);
// 배열도 하나의 객체이기 때문에 배열의 타입을 Object로 반환한다.
// 배열인지 확인하는 방법은 isArray 메소드를 활용한다.
console.log(Array.isArray(address));