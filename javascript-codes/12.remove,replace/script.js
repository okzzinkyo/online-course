const listParent = document.querySelector('ul.list-group')

const list = document.querySelectorAll('li');

// 요소 지우기
// listParent.removeChild(list[0]);


// 요소 교체하기
const oldElement = document.getElementById('A');
const newElement = document.createElement('span');

newElement.textContent = 'Hi';

oldElement.parentElement.replaceChildren(newElement, oldElement);
