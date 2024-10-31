// NOTE: call, bind, apply
// 함수 안의 this는 객체를 참조하는데, 다른 것을 받을 수 있도록 하는 메소드

// Call();
const fullName = function (city, country) {
  console.log('Call:', this.firstName + ' ' + this.lastName, city,country);
}
fullName();

const person1 = {
  firstName: 'John',
  lastName: 'Smith'
};

fullName.call(person1, "Oslo", "Norway");
// 인수를 사용할 수도 있다.

// Apply();
const fullName2 = function (city, country) {
  console.log('Apply:', this.firstName + ' ' + this.lastName, city, country);
};

const person2 = {
  firstName: 'John',
  lastName: 'Smith',
};

fullName2.apply(person2, ['Oslo', 'Norway']);
// call 메소드와 달리 배열로 인수를 전달해야 한다.


// Bind
function func(language) {
  if (language === 'kor') {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: '안녕',
  engGreeting: 'Hello',
}

// bind메소드는 직접 함수를 실행하는 것이 아닌 바인딩만 해주기 때문에 재호출 해야한다.
func.bind(greeting)('kor');