const li = document.createElement('li');

// 클래스 추가
li.className = 'list-group-item';
// li.classList.add('list-group-item', 3);

// id 추가
li.id = 'new-item';

li.setAttribute('name', 'New list item');

// link element 생성
const link = document.createElement('a');
link.className = 'alarm-item';
link.innerHTML = '<i class="bi-alarm"></i>';

li.appendChild(link);

document.querySelector('ul.list-group').appendChild(li);