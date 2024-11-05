// NOTE: Promise
// new Promise : Promise를 지원하지 않은 함수를 감쌀 때 사용
function fetchData() {
  return new Promise((resolve, reject) => {
    // 비동기 요청
    const success = true;
    if (success) {
      resolve('성공');
    } else {
      reject('실패');
    }
  })
}

fetchData()
  .then((response) => {
    console.log(response);
    console.log('===============');
  })
  .catch((error) => {
    console.log(error);
  });

// fetch - Promise 지원하는 내장 함수
fetch('http://jsonplaceholder.typicode.com/todos/1')
  .then((response1) => response1.json())
  .then((json1) => console.log(json1))
  .then(() => fetch('http://jsonplaceholder.typicode.com/todos/2'))
  .then((response2) => response2.json())
  .then((json2) => console.log(json2))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('작업 끝!');
    console.log('===============');
  }); 

// Promise.all()
// 모든 Promise 객체를 배열로 나열해서 작업이 모두 이행된 후에 결과 값을 반환한다.
// 프로미스 중 하나라도 reject되면 reject된 promise의 error로 전체를 reject한다.

// Promise.race()
// 가장 먼저 끝나는 작업부터 결과 값을 반환

// NOTE: Async Await 구문
// 비동기 코드를 동기 코드처럼 보이게 한다.
// 동기식 코드에서 쓰는 try..catch 구문을 사용할 수 있다.
async function makeRequests() {
  try {
    const response1 = await fetch('http://jsonplaceholder.typicode.com/todos/1');
    const jsonResponse1 = await response1.json();
    console.log(jsonResponse1);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('모든 작업 끝');
    console.log('===============');
  }
  
}

makeRequests();