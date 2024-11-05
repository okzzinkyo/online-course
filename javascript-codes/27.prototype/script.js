let user = {
  name: 'John',
  age: 45,
};

console.log(user.name);
console.log(user.hasOwnProperty('email'));
// 모든 객체는 hasOwnProperty와 같은 global Object Prototype을 가진다.

console.log('========================');

// Prototype - 자바스크립트 객체가 다른 객체로부터 메서드와 속성을 상속받는 메커니즘

// prototype을 지정하는 방법
// 1. 생성자.prototype을 이용해서 prototype 지정
function Person(name, email, birthday) {
  this.name = name;
  this.email = email;
  this.birthday = new Date(birthday);
}

// 재사용하는 함수 같은 경우 prototype에 넣어주면 더 효율적(더 적은 메모리 사용)으로 사용할 수 있다.
Person.prototype.calculateAge = function () {
  const diff = Date.new() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const john = new Person('john', 'john@example.com', '7-10-91');
const han = new Person('han', 'john@example.com', '2-11-91');
console.log('john: ', john);
console.log('han: ', han);

console.log('========================');

// 2. Object.create()을 이용해서 prototype 지정
function Person2(name, email, birthday) {
  let person = Object.create(personsPrototype);
  person.name = name;
  person.email = email;
  person.birthday = new Date(birthday);
  
  return person;
}

const personsPrototype = {
  calculateAge() {
    const diff = Date.new() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },
};

const tom = new Person('tom', 'tom@example.com', '8-12-92');
const ock = new Person('ock', 'ock@example.com', '2-11-94');

console.log('tom: ', tom);
console.log('ock: ', ock);