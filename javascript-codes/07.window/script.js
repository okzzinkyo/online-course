let val;

val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

val = window.scrollY;
val = window.scrollX;

val = window.location; // url 정보
// window.location.href = 'http://www.naver.com'; // 해당 url로 이동

val = window.history;
// window.history.go(-1); // 사용자가 방문한 url history에서 뒤로가기 1

val = window.navigator; // 브라우저에 대한 정보

console.log(val);