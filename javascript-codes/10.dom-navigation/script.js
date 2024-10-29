let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list: ', list);
console.log('listItem: ', listItem);

// child nodes 반환
// NodeList 반환, line break O
// 모든 노드에 적용 가능한 탐색 프로퍼티
val = list.childNodes; 
val = list.childNodes[0];
val = list.childNodes[0].nodeName; 
val = list.childNodes[3];

val = list.childNodes[3].nodeType;
// NOTE: NodeType
// 1 - Element
// 2 - Attribute(deprecated)
// 3 - Text node
// 8 - Comment node(주석)
// 9 - Document itself
// 10 - Doctype

// children element nodes 반환
// HTMLCollection 반환 (line break X)
// 요소 노드에만 적용 가능한 탐색 프로퍼티
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hi';

// First Child
val = list.firstChild;
// list.firstChild === list.childNodes[0];
val = list.firstElementChild;

// lastChild
val = list.lastChild;
// list.firstChild === list.childNodes[list.childNodes.length - 1];
val = list.lastElementChild;

// child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// previous sibling
val = listItem.previousSibling;
// val = listItem.previousElementSibling;

console.log('val: ', val);
console.log('=======================');

// NOTE: NodeList
// 배열이 아닌 반복 가능한(iterable) 유사 배열 객체인 컬렉션.
// forEach, for/of(배열순환) 반복문 사용가능
for (let node of list.childNodes) {
  console.log(node);
}
console.log('=======================');

// 배열 메서드 사용불가능 -> Array.from(NodeList)
console.log(Array.from(list.childNodes).filter);
