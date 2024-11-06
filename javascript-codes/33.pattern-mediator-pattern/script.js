class Participant {
  constructor(name) {
    this.name = name;
    this.chatRoom = null; // 1.
    this.messages = [];
  }

  // 2. ChatRoom 인스턴스의 send() 호출
  send(messages, to) {
    this.chatRoom.send(messages, this, to);
  }

  // 3.
  receive(message, from) {
    this.messages.push({ message, from });
  }

  showMessage() {
    console.log(this.messages);
  }
}

class ChatRoom {
  constructor() {
    this.participant = {};
  }

  enter(participant) {
    this.participant[participant.name] = participant;
    participant.chatRoom = this; // 1. participant.chatRoom에 ChatRoom 인스턴스를 넣음
  }

  // 2.
  send(message, participant, to) {
    // 3. 유저 객체의 인스턴스의 receive 메소드 호출
    this.participant[to.name].receive(message, participant);
  }
}

const chatRoom = new ChatRoom();

const user1 = new Participant('user1');
const user2 = new Participant('user2');
const user3 = new Participant('user3');

chatRoom.enter(user1);
chatRoom.enter(user2);
chatRoom.enter(user3);

console.log('chatRoom: ', chatRoom);
console.log('user1: ', user1);

user1.send('Hello', user2);
user1.send('Hello22222222', user2);

console.log('chatRoom: ', chatRoom);
