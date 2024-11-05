// class 문법 이용
// class 내부에 함수를 생성하면 proptotype에 자동으로 넣어준다.
class Person {
  // 인스턴스 생성, 클래스 필드 생성/초기화
  constructor(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }

  // NOTE: static
  // 클래스 함수 자체에 메서드 설정
  // this.name 같은 것을 안쓰는 독립적인 것을 정의할 때 사용.
  // 인스턴스가 아닌 클래스 이름을 이용해서 사용
  // ex) Person.multipleNumbers(1, 2);
  static multipleNumbers(x, y) {
    return x * y;
  }
}

const john = new Person('john', 'john@example.com', '10-3-98');
console.log('john: ', john);

const multipleNumbers = Person.multipleNumbers(1, 2);
console.log('multipleNumbers: ', multipleNumbers);

// Sub Class
class Person2 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }
}

class Client extends Person {
  constructor(name, email, phone, address) {
    super(name, email)

    this.phone = phone;
    this.address = address;
  }
}

const ock = new Client('ock', 'ock@example.com', '010-0000-0000', '서울');
console.log('ock: ', ock);

ock.introduce();
console.log(ock.introduce());

// NOTE: Person Class에 존재하는 introduce() 메서드 실행 순서
// 1. Client 객체에 inroduce가 있는지 확인
// 2. Client.prototype에 있는지 확인
// 3. extends를 통해 관계가 만들어진 Client.prototype의 프로토타입인 Person.prototype에 메서드가 있는지 확인 후 실행
