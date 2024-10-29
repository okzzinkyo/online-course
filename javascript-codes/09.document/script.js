let val;

val = document;

val = document.baseURI; // 웹 페이지의 절대 URI
val = document.head; // <head> 태그
val = document.body; // <body> 태그

val = document.forms; // <forms> 태그
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts[1].getAttribute('src');

console.log('val: ', val);
console.log("=======================");

const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

headerContainer.textContent = 'textContent';
headerContainer.innerText = 'innerText';
headerContainer.innerHTML = '<span>innerHTML</span>'; 

// NOTE: textContent VS innerText VS innerHTML
// textContent : 노드가 가지고 있는 텍스트 값 그대로
// innerText : 사용자에게 보여지는 텍스트 값(여러 공백 하나의 공백으로 처리)
// innerHTML : html까지;


console.log(headerContainer);
console.log('=======================');

const items = document.getElementsByClassName('list-group-item');
items[0].style.color = 'blue';
items[3].textContent = 'Hi';

console.log('items: ', items);
console.log('=======================');

let lists = document.getElementsByTagName('li');
console.log('lists: ', lists);

lists = Array.from(lists);
lists.forEach((list, index) => {
  list.textContent = `${index}. List`;
});

console.log('=======================');

let liOdd = document.querySelectorAll('li:nth-child(odd)')
console.log('liOdd: ', liOdd);
liOdd.forEach((list, index) => {
  list.style.backgroundColor = 'gray';
});

console.log('=======================');
