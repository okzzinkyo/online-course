// Symbol 유니크한 식별자를 위해 사용
// Symbol(val)

const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('hi');

console.log('sym1: ', sym1);
console.log('sym2: ', sym2);
console.log(sym1 === sym2); // false
console.log(sym3.description);
console.log('=======================');

let carA = {
  id: 1,
  name: 'morning',
  brand: 'kia',
  price: 1000
  // [idSym] : 300
}

// carA.id = 300; // 기존의 carA의 id값이 변함

// Symbol을 사용하면 기존의 값을 변형시키지도 않고, 객체에 유니크한 값을 부여할 수 있다.
const idSym = Symbol('id');
carA[idSym] = 300;
console.log(carA);

console.log('=======================');

// 다음 방식으로 조회한 property에서는 제외된다.
console.log(Object.getOwnPropertyNames(carA));
for (const key in carA) {
  console.log(key);
}

// 객체에 등록된 symbols을 구하기 위해서는 Object.getOwnPropertySymbols()을 사용
console.log(Object.getOwnPropertySymbols(carA));

console.log('=======================');

// NOTE: Symbol.for()
// 전역 symbol 생성해서 description이 같으면 같은 값을 가진다.
// const symbol1 = Symbol('hi');
// const symbol2 = Symbol('hi');
const symbol1 = Symbol.for('hi');
const symbol2 = Symbol.for('hi');

console.log(symbol1 === symbol2);

// NOTE: Symbol.keyFor()
// 전역 symbol을 만들 때 사용한 description을 얻을 수 있다.
console.log(Symbol.keyFor(symbol1));
console.log(Symbol.keyFor(symbol2));

console.log('=======================');

// Symbol 사용 예시 1
// 출력 값 오류 예방
const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const dog = 'blue';

function getImportantLevel(color) {
  switch (color) {
    case RED:
      return 'very important';
    case ORANGE:
      return 'important';
    case YELLOW:
      return 'little important';
    case BLUE:
      return 'not important';
    default:
      console.log(`${color} not included`);
  }
}

console.log(getImportantLevel(BLUE));
console.log(getImportantLevel(dog));
// not important 동일한 결과 값이 나오게 되는데 이럴 때, Symbol을 사용하면 실수를 방지할 수 있다.

console.log('=======================');

// Symbol 사용 예시 2
// for/in로 프로퍼티를 나열할 때, 특정 프로퍼티(length)를 출력하기 원하지 않을 때 Symbol로 지정

const length = Symbol('length');
class Car {
  constructor() {
    // this.length = 0;
    this[length] = 0;
  }
  add(brand, name) {
    this[brand] = name;
    this[length]++;
  }
}

let myCars = new Car();
myCars.add('kia', 'morning');
myCars.add('hyundai', 'tucson');
myCars.add('genesis', 'gv80');

for (const car in myCars) {
  console.log(car, myCars[car]);
}