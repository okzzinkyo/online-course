// shallow copy
const aArray = [1, 2, 3];

// shallow copy with spread operator
const bArray = [...aArray, 4];

console.log('aArray: ', aArray);
console.log('bArray: ', bArray);
console.log('aArray === bArray', aArray === bArray);

// shallow copy with Object.assign()
const cArray = Object.assign([], bArray);
console.log('cArray: ', cArray);
console.log('bArray === cArray', bArray === cArray);

cArray.push([5, 6, 7]);
console.log('cArray: ', cArray);

const dArray = [...cArray, 10];
console.log('dArray: ', dArray);

dArray[4].push(8);
console.log('cArray', cArray);
console.log('dArray', dArray);
// NOTE: 여기서 cArray의 중첩된 부분에 '8'이 들어간 것을 확인 할 수 있다.
// 얕은 복사는 첫 번째 depth만 복사가 되기 때문에 중첩이 된 배열이나 객체는 따라서 변경된다.
// Array.from(), slice()도 shallow copy를 한다.

console.log('=====================');

// 얕은 동결
const aObject = {
  "a": "a",
  "b": "b",
  "cObject": { "a": 1, "b": 2 }
}

Object.freeze(aObject);
aObject.a = 'c';
console.log('aObject: ', aObject); // 변경X

// aObject.cObject.a = 3;
console.log('aObject: ', aObject); // 변경O
console.log("=====================");

// deep copy with json.parse(json.stringfy())
const newAObject = JSON.parse(JSON.stringify(aObject));
console.log('aObject: ', aObject);
console.log('newAObject: ', newAObject);

// aObject.cObject.a = 3;
console.log('aObject: ', aObject);
console.log('newAObject: ', newAObject); // 변경X
console.log('=====================');

// deep copy with nested spread operator
const newAObject2 = { ...aObject, cObject: { ...aObject.cObject } };

console.log('aObject: ', aObject);
console.log('newAObject2: ', newAObject2);

aObject.cObject.a = 3;
console.log('aObject: ', aObject);
console.log('newAObject2: ', newAObject2); // 변경X

// lodash 라이브러리(cdn 설치)를 이용
// const newAObject = _.cloneDeep(aObject);

// structuredClone 내장함수 사용
// const object2 = structuredClone(object)