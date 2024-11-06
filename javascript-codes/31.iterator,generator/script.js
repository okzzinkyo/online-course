// NOTE: Iterator
// next() 함수를 호출해서 { value:, done: } 프로퍼티를 갖는 객체를 반환하는 객체
// 일시 정지, 재시작이 가능하다

function makeIterator(numbers) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < numbers.length ? { value: numbers[nextIndex++], done: false } : { value: undefined, done: true };
    },
  };
}

// 숫자 배열 생성
const numbersArray = [1, 2, 3];

// NOTE: Symbol.iterator
// 객체를 위한 기본 Iterator를 반환하는 메소드
// 반복가능한 값을 반복기로 생성 가능.
// const numbersIterator = makeIterator(numbersArray);
const numbersIterator = numbersArray[Symbol.iterator]();

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log('========================');

// NOTE: iterable
// for..of 구문을 사용 가능하면 iterable한 객체이다.
const numbersIterable = [1, 2, 3];
const numbersNotIterable = { a: 1, b: 2 };

console.log(typeof numbersIterable);
console.log(typeof numbersNotIterable);

for (const n of numbersIterable) {
  console.log(n);
}

console.log('========================');

// [Symbol.iterator]()이 값을 가지면 iterable한 객체이다.
const set = new Set([1, 2, 3, 4]);
console.log('set: ', set);

const map = new Map([['a', 1], ['b', 2]])
console.log('map: ', map);

console.log(set[Symbol.iterator]().next());
console.log(map[Symbol.iterator]().next());

console.log('========================');

// NOTE: Generator
// 사용자의 요구에 따라 다른 시간 간격으로 여러 값을 반환할 수 있는 함수

function* sayNumbers() {
  // yield
  // 함수를 일시적으로 정시키겨준다(일반 함수의 return과 유사).
  yield 1;
  yield 2;
  yield 3;
}

// 제너레이터 함수의 반환이 제너레이터
const number = sayNumbers();
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());

console.log('========================');

// NOTE: generator의 iterable에서 반환하는 iterator 자기 자신과 같다.
// generator = generator[Symbol.iterator]();
// .next()로 {value:, done:} 반환 가능
function* generatorFunction() {
  yield 1;
}
const generator = generatorFunction();
console.log(generator.next());

console.log('========================');

// Lazy Evaluation
// 계산의 결과 값이 필요할 때까지 계산을 늦춰서 필요한 데이터를 필요한 순간에 생성
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.return(10)); // 억지로 value에 값을 넣어줄 수 있다.

console.log('========================');

// yield* 배열로 interable한 generator를 만들 수 있다.
function* generatorFunction2() {
  yield* [1, 2, 3];
}

const generator2 = generatorFunction2();

for (const number of generator2) {
  console.log(number);
}

