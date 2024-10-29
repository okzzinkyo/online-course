
// NOTE: var 
// 중복 선언 O, 재할당 O
var greeting1 = 'hello';
console.log('var: ', greeting1);

var greeting1 = 'hi';
console.log('var 중복 선언: ', greeting1);

var greeting1 = 'how are you?';
console.log('var 재할당: ', greeting1);

console.log("====================");

// NOTE: let
// 중복 선언 X, 재할당 O
let greeting2 = 'hello';
console.log('let: ', greeting2);

// let greeting = 'hi'; 중복 선언 X
greeting2 = 'hi'; // 재할당
console.log('let 중복 선언 X');
console.log('let 재할당: ', greeting2);

console.log('====================');

// NOTE: const
// 중복 선언 X, 재할당 X
const greeting3 = 'hello';
console.log('const: ', greeting3);
console.log('const 중복 선언 X, 재할당 X');

// const greeting = 'hi'; 중복 선언 X
// greeting = 'hi'; 재할당 X
console.log('====================');


// NOTE: 유효한 참조 범위(Scope)

// ** var => 함수 레벨 스코프
function func1() {
  if (true) {
    var a = 'a';
    console.log(a);
  }

  console.log(a); // 출력 O
}
// console.log(a); // 출력X
func1();
console.log('====================');

// ** let, const => block 레벨 스코프
function func2() {
  if (true) {
    let a = 'a';
    console.log(a);
  }

  // console.log(a); // 출력 X
}

func2();
console.log('====================');

// NOTE: 호이스팅

// ** var 선언문
console.log(greeting4); // undefined
var greeting4 = 'hello';

// javascript 인터프리터는 변수 생성의 선언 단계 및 할당 단계를 분할한다.
// 선언 부분은 코드가 실행되기 전에 현재 범위의 맨 위로 호이스팅되고 초기에 undefined 값이 할당된다.
// 즉, 초기화 되기 전에 변수를 사용할 수 있다.
console.log('====================');

func3();
function func3() {
  console.log('hoisting test');
}
console.log('====================');

// ** let/const 선언문
// let, const로 선언한 변수도 호이스팅이 된다.
// 그러나 var와 달리 초기에(실제로 할당되기 전) 어떤 값도 할당되지 않는다.
console.log(greeting5); // Uncaught ReferenceError: Cannot access 'greeting5' before initialization
const greeting5 = 'hello';
