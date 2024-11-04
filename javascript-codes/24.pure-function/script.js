// side effect가 없도록 pure function으로 수정하기

// 예시 1]
// 함수 밖의 스코프에 접근하지 않도록 수정

let x = 0;
const numberUp = () => x += 1;
console.log(numberUp());
console.log(x);
let y = 0;
const pureNumberUp = (num) => (num += 1);
console.log(pureNumberUp(y));
console.log(y);

console.log("================");

// 예시 2]
// shallow copy를 활용해서 기존 배열에 영향이 가지 않도록 수정

const alphabetArray = ['A', 'B'];
const addItemToArray = (originalArray, newItem) => {
  originalArray.push(newItem);
  return originalArray;
};

// console.log(addItemToArray(alphabetArray, 'C'));
// console.log(alphabetArray);

const pureAddItemToArray = (originalArray, newItem) => {
  return[...originalArray, newItem]
}

console.log(pureAddItemToArray(alphabetArray, 'C'));
console.log(alphabetArray);