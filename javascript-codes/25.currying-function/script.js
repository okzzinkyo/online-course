const sum = (x, y) => x + y;
const curriedSum = x => y => x + y;

console.log(sum(10, 20));
console.log(curriedSum(10));
console.log(curriedSum(10)(20));

console.log('===================');

const makeFood = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}${ingredient2}${ingredient3}`
    }
  }
}
const hamburger = makeFood('Bread')('Ham')('Tomato');

console.log('hamburger: ', hamburger);

const clearMakeFood = (ingredient1) => (ingredient2) => (ingredient3) => `${ingredient1}${ingredient2}${ingredient3}`;
const newHambuger = clearMakeFood('Bread')('Ham')('Cheeze');

console.log('newHambuger: ', newHambuger);

console.log('===================');

function log(date, imporance, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}]: [${imporance}] ${message}`)
}
// log(new Date(), 'DEBUG', 'some bug');

// NOTE: currying function
function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      }
    }
  }
}

const curriedLog = curry(log);
// curriedLog(new Date())('DEBUG')('some bug');

// NOTE: Dynamic currying function
// 매개변수가 몇 개든 어떤 함수든 커리가 된 함수로 변환
function DynamicCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

const sum2 = (x, y, z, j, a) => x + y + z + j + a;
const curriedSum2 = DynamicCurry(sum2);
console.log(curriedSum2(1)(2)(10)(5)(32));