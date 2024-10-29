// NOTE: for
// 코드 블록을 반복
for (let i = 0; i < 10; i++){
  if (i === 3) {
    console.log('Its is 3');
    continue; // 처음으로 돌아감
  }
  if (i === 5) {
    console.log('5 Stop the loop');
    break;
  }

  console.log('Number' + i);
}

console.log('=========================');

// NOTE: for/in
// 객체의 속성을 반복
const user = {
  name: 'Ock',
  province: '경기도',
  city: '성남시'
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

console.log('=========================');

// NOTE: while
// 지정된 조건이 true인 동안 반복

let i = 0;

while (i < 10) {
  console.log('Number' + i);
  i++;
}

console.log('=========================');

// NOTE: do/while
// 조건이 true인지 검사하기 전에 코드 블록을 한 번 실행 후, 조건이 true인 동안 반복

let j = 100;
do {
  console.log('Number' + j);
  j++;
}

while (j < 10);

console.log('=========================');

// NOTE: 배열
const locations = ['서울', '부산', '경기도', '대구'];

for (let i = 0; i < locations.length; i++){
  console.log(locations[i]);

  // loop를 중간에 멈출 수 있다.(break, continue)
  // await와 함께 작동
  // forEach보다 속도가 빠름
  if (i === 1) {
    break;
  }
}

locations.forEach((location, index, array) => {
  console.log(`${index} : ${location}`);
  console.log(array);

  // loop를 중간에 멈출 수 없다.
  // await와 완벽하게 작동하지 않는다.
  if (index === 1) {
    return;
  }
})

locations.map((location, index) => {
  console.log(`${index} : ${location}`);
})

